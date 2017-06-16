# OnlineJudge [![Build Status](https://travis-ci.org/QingdaoU/OnlineJudge.svg?branch=master)](https://travis-ci.org/QingdaoU/OnlineJudge)

部分相关的组件已经开源, 可以参考。

 - https://github.com/QingdaoU/Judger OnlineJudge判题核心, 目前使用的是master版本, newnew分支为重构版本(推荐)
 - https://github.com/QingdaoU/JudgeServer 使用HTTP提供Judge服务
  
------------------------------------------------------------------
  
基于 Python 和 Django 的在线评测平台。

主要特点:
 
 - 基于 Docker，急速部署
 - 超级管理员管理全局，普通管理员任意创建小组和小组内比赛，方便布置作业和考试使用
 - 提供 Virtual Judge 和单点登录使用 API，不再繁琐的进行模拟登陆
 - 后台管理判题服务器，轻松分离 web 和判题服务器

安装文档: https://github.com/QingdaoU/OnlineJudge/wiki

OpenAPI文档: https://github.com/QingdaoU/OnlineJudgeOpenAPI

Demo: https://qduoj.com

License: The Star And Thank Author License

交流QQ群: https://github.com/QingdaoU/OnlineJudge/wiki/QQ群

------------------------------------------------------------------

本项目意在解决QDU OnlineJudge在的一些问题.依优先级顺序排列如下.

TODO：

 - <del>enhancement:分页</del> (2017.6.16完成)
 - <del>bug:普通管理员在编辑比赛题面时出现"比赛不存在"</del> (2017.6.16完成)
 - enhancement:昵称系统 (2017.6.16初步实现)
 - enhancement:赋予比赛创建者查看编辑比赛所有题目的权限
 - enhancement: 题目通过数据的统计
 - enhancement:比赛中的"Clarification"即"澄清"系统
 - enhancement:讨论系统
 
 
 
