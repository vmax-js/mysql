# mysql

## 进入mysql
```
mysql -u root -p
tan501924?
```

```sql
# 查看编码方式
show variables like 'character\_set\_%'; 
```
## 改编码

- 修改my.ini文件中的默认字符编码
- 重新启动mysql服务 mac ```service mysqld restart``` 

## 查看所有数据库
``` show databases;```

## navicat 图形化管理工具 收费

## 数据库设计

### sql  结构化查询语言

- DDL 数据定义语言

    - 操作数据库对象  库 表 视图 存储过程

- DML 数据操作语言

  - 操作数据库中的记录

- DCL 数据控制语句

    - 操作用户权限

### 管理库

- 创建库
  - navicat -> 点击查询 -> 新建查询 -> ``` create database 数据库名字;``` 运行：command+r
- 切换当前库
  - ``` use 数据库名字;```
- 删除库
  - ``` drop database 数据库名字 ```
### 管理表
- 创建表
  - 字段
    - 字段名
    - 字段类型
      - bit:占1位，0或1，false或true
      - int：占32位，整数
      - decimal(M,N)：能精确计算的实数，M是总的数字位数，N是小数位数
      - char(n)：固定长度位n的字符
      - varchar(n)：长度可变，最大长度位n的字符
      - text：大量的字符
      - date：仅日期
      - datetime：日期和时间
      - time：仅时间
```sql
# 创建一个student表 
create table `test`.`student` (
  `name` varchar(100) not null,
  `birthday` date not null,
  `sex` bit(255) not null default 0,
  `stuno` int(0) not null auto_increment,
  primary key (`stuno`)
);
```
- 修改表
```sql
alter table `test`.`student`(
    modify column `stuno` int(0) not null auto_increment first, -- 放到第一行
    add column `phone` varchar(11) not null after `sex`;
)
```
- 删除表
```sql
drop table `test`.`student`;
```
## 主键和外健 DDL
- 主键 唯一，每张表都要有主键，不能更改，无业务含义
  - ```select uuid();``` 打印uuid每次都不一样，为字符串
- 外健 
  - 用于产生表关系的列
  - 外健列会连接到另一张表(或自己)的主键
- 表关系
  - 一对一
    - 一个A对应一个B，一个B对应一个A
    - 例如：用户和用户信息
    - 把任意一张表的主键同时设置为外健
  - 一对多
    - 一个A对应多个B，一个B对应一个A，A和B是一对多，B和A是多对一
    - 例如：班级和学生，用户和文章
    - 在多一端的表上设置外健，对应到另一张表的主键
  - 多对多
    - 一个A对应多个B，一个B对应多个A
    - 例如： 学生和老师
    - 需要新建一张关系表，关系表至少包含两个外健，分别对应到两张表
- 三大设计范式
  - 每一列不可分割
  - 非主键列必须依赖于主键列
  - 非主键列必须直接依赖主键列
  
## 增删改查 表中内容 DML
- 增
```sql
-- 增加一条语句
insert into `student`(stuno,`name`,birthday,sex,phone,classid)
values('5000','tan','1232-2-2',default,'14332342532',2);
```
```sql
-- 增加多条语句
insert into `student`(stuno,`name`,birthday,sex,phone,classid)
values('5000','tan','1232-2-2',default,'14332342532',2),
('50001','tan1','1232-2-21',default,'14332342332',2);
```
- 改
```sql
update student set `name` = `sdf`
where id=12; -- 条件
```
- 删
```sql
delete from student
where `name` = `xxx`;
```
### 单表基本查询
- select from
```sql
select id, loginid, 'abc' as '额外的一列' from `user`;
```
```sql
select ismale '性别' from `employee`;
```
```sql
 -- 查询所有列
select *,'abc' as `extra` from `employee`;
```
```sql
select id,`name`,
case ismale
when 1 then `男`
else `女`
end  `sex` -- 起别名
,salary
from employee;

-- if-else
select id,`name`,
case 
when ismale = 1 then `男`
else `女`
end  `sex` -- 起别名
,salary
from employee;

-- if-elseif-else
select id,`name`,
case 
when salary >= 1000 then '高'
when salary >= 800 then  '中'
else '低'
end `工资等级`,salary
from employee;

-- distinct 去重 一列或者两列完全相同的
select distinct location from empolyee;
```
- 运行顺序from,where,select,order by,limit 

- where
where后面可以写很多条件
```sql
-- =
select * from employee
where ismale = 1;

-- in
select * from employee
where companyid in (1,2); -- 为1或者2的

-- is 判断是null
select * from employee
where location is null;

-- is not 不是null
select * from employee
where location is not null;

-- > < >= <= 
select * from employee
where salary >= 10000; -- 工资大于等于10000

-- between
select * from employee
where salary between 10000 and 12000; -- 工资在10000到12000

-- like 模糊查询
select * from employee
where `name` like '%谭%'; -- 查询名字为%谭% %表示多个字符

select * from employee
where `name` like '谭_' -- _表示一个字符

-- and  并列多个添加
-- 查询姓张的性别为女工资大于12000
select * from employee
where `name` like '张%' and ismale=0 and salary >= 12000;

-- or 或者
select * from employee
where `name` like '张%' and (ismale=0 and salary >= 12000
or
birthday > '1996-3-1');

-- order by  asc升序 desc降序
select * from employee
where `name` like '张%' and ismale=0 and salary >= 12000
order by salary asc; -- 按工资升序排序，默认升序

select * from employee
where `name` like '张%' and ismale=0 and salary >= 12000
order by ismale asc, salary desc; -- 先升序排序ismale，在相等的ismale中按照salary降序排列

-- limit n,m 跳过n条数据，取出m条数据
```
- 练习
```sql
-- 查询user表中姓名为admin，密码为12345，登陆功能
select * from user
where `name`=`admin` and `loginid` = 12345;

-- 查询员工表，按照员工的入职时间降序排序，并且使用分页查询
-- 查询第三页，每页10条数据
select * from employee
order by joindate
limit 20,10;

-- 查询工资最高的女员工
select * from employee
where ismale = 0 
order by salary desc
limit 0,1
```

### 多表查询
- 笛卡尔积  两个表相乘
```sql
select t1.`name` as '主场', t2.`name` as '客场'
-- 笛卡尔积
from team as t1, team as t2
where t1.id != t2.id;
```
--
主场 ｜ 客场
火箭    勇士
骑士    勇士
猛龙    勇士
雄鹿    勇士
勇士    火箭
...    ...
--
- 左连接 left join
```sql
select * 
from department as d left join employee as e
on d.id = e.deptId; -- 条件 没有匹配上的就会显示为空 左连接的话就是右边为空
```

- 右连接 right join
和左连接相反

- 内连接 inner join
```sql
select e.name as empname,d.name as dptname,c.name as companyname
from employee as e inner join department as d 
on d.id = e.depId
inner join company as c 
on d.companyId = c.id;
```

- 练习
```sql
select e.name '员工姓名',
case ismale when 1 then '男' else '女' end '性别',
e.joinDate '入职时间',
e.salary 薪水,
d.`name` 部门名称,
c.`name` 公司名称
from employee as e
inner join department d on e.depId = d.id
inner join company  c on d.companyid = c.id;
```
### 函数与分组
- 函数
  - 内置函数
    - 数学
      - abs(n)
      - ceil(n) 向上取整
      - round(n) 四舍五入
      - truncate(n,m) 截断n,保留小数点m位
    - ```聚合```
      - AVG(col) 返回指定列的平均数
      - count(col) 返回指定列中非NULL值的个数
      - min(col) 返回指定列的最小值
      - max(col) 返回指定列的最大值
      - sum(col) 返回指定列的所有值之和
    - 日期和字符串函数
```sql
select CONCAT_WS('@',`name`,salary)
from employee; 
-- name@salary

select curdate(); -- 当前年月
select curtime(); -- 当前时间

-- 根据出生年份计算年龄
select *,
timestampdiff(year,birthday,cudate()) as age
from employee
order by age asc;
```
- 分组
分组后，只能查询分组的列和聚合列
运行顺序
from,join,on,where,group by,select,having,order by,limit
```sql
select location,count(id) as empnumber
from employee
group by location
having empnumber>=40;
```
## 视图
```sql
create view 视图名 as select * from employee;
```