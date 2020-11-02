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
