var screen = 0;
function handle(e){
    if(e.keyCode === 13){
        e.preventDefault();


        if (screen == 0) {
            document.getElementById('screen1').style.opacity = 0;
            setTimeout(() => {
                document.getElementById('screen1').style.display = 'none';
                document.getElementById('screen2').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('screen2').style.opacity = 1;
                }, 50)

                setTimeout(() => {
                    document.getElementById('screen2').style.opacity = 0;
                    setTimeout(() => {
                        document.getElementById('screen2').style.display = 'none';
                        document.getElementById('screen3').style.display = 'block';
                        setTimeout(() => {
                            document.getElementById('screen3').style.opacity = 1;
                        }, 50)
                    }, 500)
                }, 2000)
            }, 500);
        }
    }
}