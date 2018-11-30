layout 一直是前端搞不太定的东西 
css里布局是是不能说的秘密
css 里直接表达布局是不完整的
1. 本质是希望我们的网页跟页面设计媒体一样，好看
不好看的时候，由table 来做布局，tr + td 自身就可以做好布局
天生是用来展示数据的，现在也只用于这一项，原因是table做好的布局太死板
    table 不适合现代富媒体
2. 标签的盒子模型 比较慢 ，易出问题
    margin 的合并 就上面标签的bottom和下面标签的top 会选择一个较大的margin合并
    浮动，定位
    成熟的float
    精确的定位
    现代的display：flex
    display：table
    标签能力表现 加css属性 布局
    布局layout = 行row列column的规划
3. 由2 推出圣杯布局
4. 圣杯式布局 div+css 
兼容性一点问题都没有的三列式布局，主列和两边侧边栏。
PC时代，移动端的时代手机的宽度不足以提供三列的空间
标签div 核心就是浮动 block => inline但是宽度还在

圣杯式布局和双飞翼是布局经典的三栏式布局，效果基本相同，两边两栏宽固定
中间栏宽度自适应。中间栏放最前面为的是显示最优性能，
放在前面的html先下载先渲染。兼容性好，针对于PC IE8 -> chrome/Edge 
margin 负值 float left 主列100% 侧边栏 margin 负值
区别:圣杯式， position：relative+left/right -200px
双飞翼：给main 加子元素，main 都是留出位子，但是双飞翼不需要让两边侧栏再移动位置
