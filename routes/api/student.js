const express = require('express');
const stuServ = require('../../services/studentService');
const {
    asyncHandler
} = require('../getSendResult')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    // 分页获取学生
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1;
    const name = req.query.name || "";
    return await stuServ.getStudents(page, limit, sex, name);

}))

router.get('/:id', asyncHandler(async (req, res) => {
    // 获取单个学生
    return await stuServ.getStudentById(req.params.id);

}))

router.post('/', asyncHandler(async (req, res, next) => {
    // 添加学生
    // res.send('添加学生')
    // try {
    //     // 由于做了验证的所以有可能报错
    //     const result = await stuServ.addClass(req.body);
    //     res.send(sendMsg.getResult(result));
    // } catch (err) {
    //     next(err)
    // }
    return await stuServ.addClass(req.body);
}))

router.put('/:id', asyncHandler(async (req, res) => {
    return await stuServ.updateClass(req.params.id, req.body);
}))

router.delete('/:id',
    // 删除一个学生
    asyncHandler(async (req, res) => {
        return await stuServ.deleteClass(req.params.id)
    })
)

module.exports = router;


// app.use('/api/student',router)