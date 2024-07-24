function chCarImg() {
    let value = document.getElementById('select_car_name').value

    document.getElementById('actors').src = `img/${value}`
}