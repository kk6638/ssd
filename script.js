// 等待页面完全加载后再执行脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面上的按钮元素
    const actionBtn = document.getElementById('action-btn');

    // 为按钮添加点击事件监听器
    actionBtn.addEventListener('click', function() {
        // 定义一组随机的鼓励语
        const messages = [
            "你今天看起来棒极了！🚀",
            "保持热爱，奔赴山海！🌊",
            "代码无BUG，头发浓密！💻",
            "生活明朗，万物可爱！🌟",
            "GitHub Stars 涨涨涨！⭐"
        ];

        // 随机抽取一条消息
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        // 弹出提示框显示消息
        alert(randomMessage);
        
        // 顺便在控制台打印一条日志
        console.log("用户点击了惊喜按钮，获得了鼓励：", randomMessage);
    });

    console.log("个人主页脚本已成功加载！");
});