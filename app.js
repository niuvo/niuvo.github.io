document.addEventListener('mousemove', function(event) {
    // const dot = document.querySelector('.dot::before');
    const x = event.clientX / window.innerWidth * 360;

    const gradientAngle = `conic-gradient(from ${x}deg)`;
    
    // console.log(`Angle: ${x}%`);
    // console.log(`Angle: ${x/3}%`);
    // dot.style.setProperty('--angleX', `${x}%`);
    const y = 1.04;

    document.querySelector('.dot').style.setProperty('--angleX', `${x}deg`);
    document.querySelector('.dot1').style.setProperty('--angleX1', `${x1=x/y}deg`);
    document.querySelector('.dot2').style.setProperty('--angleX2', `${x2=x1/y}deg`);
    document.querySelector('.dot3').style.setProperty('--angleX3', `${x3=x2/y}deg`);
    document.querySelector('.dot4').style.setProperty('--angleX4', `${x4=x3/y}deg`);
});