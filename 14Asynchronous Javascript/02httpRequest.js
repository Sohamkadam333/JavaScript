const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/', true);


request.onload = function () {

        if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                console.log(response);
        } else if (this.readyState === 4) {
                console.log('Could not fetch data');
        }

}


request.send();
