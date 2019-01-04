* 生成器函数 封装着异步顺序执行的代码 yield 停下来，右边为promise ，左边为待resolve 之后的data
生成器函数调用得到生成器，dataGen = steps()
dataGen 就可以next被迭代 
{value:'上一次迭代之后的data',done:'是否执行完'}
Iterator迭代器