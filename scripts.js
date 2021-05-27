let flying = false;

function takeOff() {
    let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if (response) {
        document.getElementById('flightStatus').innerHTML = 'Shuttle in flight.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
        document.getElementById('spaceShuttleHeight').innerHTML = '10000';
    }
    flying = true;
}

function land() {
    alert('The shuttle is landing. Landing gear engaged.');
    document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
    document.getElementById('shuttleBackground').style.backgroundColor = 'green';
    document.getElementById('spaceShuttleHeight').innerHTML = '0';
    flying = false;
    document.getElementById('rocket').style.left = '0px';
    document.getElementById('rocket').style.right = '0px';
    document.getElementById('rocket').style.top = '0px';
    document.getElementById('rocket').style.bottom = '0px';
}

function abort() {
    let abortResponse = window.confirm('Confirm that you want to abort the mission.');
    if (abortResponse) {
        document.getElementById('flightStatus').innerHTML = 'Mission aborted.';
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = '0';
    }
    flying = false;
    document.getElementById('rocket').style.left = '0px';
    document.getElementById('rocket').style.right = '0px';
    document.getElementById('rocket').style.top = '0px';
    document.getElementById('rocket').style.bottom = '0px';
}

function move(direction) {
    let rocket = document.getElementById('rocket');
    if(flying) {
        if(direction === 'right') {
            let num1 = Number(rocket.style.left.slice(0,rocket.style.left.indexOf('p')));
            if(num1 < 180) {
                num1 += 10;
                rocket.style.left = String(num1) + 'px';
            }
            else {
                alert("Steady on! Don't fly out of orbit!");
            }
        } else if(direction === 'left') {
            let num2 = Number(rocket.style.left.slice(0,rocket.style.left.indexOf('p')));
            if(num2 > -180) {
                num2 -= 10;
                rocket.style.left = String(num2) + 'px';
            } else {
                alert("Steady on! Don't fly out of orbit!");
            }
        } else if(direction === 'up') {
            let num3 = Number(rocket.style.top.slice(0,rocket.style.top.indexOf('p')));
            if(num3 > 0) {
                num3 -= 10;
                rocket.style.top = String(num3) + 'px';
                let height1 = Number(document.getElementById('spaceShuttleHeight').innerHTML);
                height1 += 10000;
                document.getElementById('spaceShuttleHeight').innerHTML = String(height1);
            } else {
                alert("Steady on! Don't fly out of orbit!");
            }
        } else if(direction === 'down') {
            let num4 = Number(rocket.style.top.slice(0,rocket.style.top.indexOf('p')));
            if(num4 <= 240) {
                num4 += 10;
                rocket.style.top = String(num4) + 'px';
                let height2 = Number(document.getElementById('spaceShuttleHeight').innerHTML);
                height2 -= 10000;
                document.getElementById('spaceShuttleHeight').innerHTML = String(height2);
            } else {
                alert("Steady on! Don't fly out of orbit!");
            }
        }
    } else {
        alert('Please take off before directing rocket.')
    }
}