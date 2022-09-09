import React from 'react'
import "./MainPAge.css"
function MainPage() {
    return (
        <div className='mainDiv'>
            <div>
<h1 variant="text" sx={{ fontSize: '1rem' }} >"Шаурма на средном" представляет:</h1>

<p variant="text" sx={{ fontSize: '1rem' }} >самую популярную продукцию в Нижнем Новгороде и за его пределами: шаурма, шашлыки, люля-кебаб, бургеры, пицца и хачапури.</p>

<p variant="text" sx={{ fontSize: '1rem' }} >Заказать ПИЦЦУ, ХАЧАПУРИ, ЛАМАДЖО, ЦЕЗАРЬ вы можете ежедневно,круглосуточно. </p>
<p variant="text" sx={{ fontSize: '1rem' }}>УВАЖАЕМЫЕ КЛИЕНТЫ, у нас изменились условия доставки. Просим Вас, перед оформлением заказа обязательно ознакомиться с новыми условиями в разделе Доставка. Итоговая сумма доставки озвучивается оператором при подтверждении заказа! Благодарим за понимание.</p>
</div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
<div class="carousel-item active">
    <div class="card">
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/103/310x210/imgl9915.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
        </div>
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/103/310x210/imgl9915.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
    </div>
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/103/310x210/imgl9915.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
        </div>
    </div>
</div>
    <div class="carousel-item">
    <div class="card">
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/88/310x210/imgl0454.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
        </div>
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/88/310x210/imgl0454.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
    </div>
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/88/310x210/imgl0454.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
        </div>
    </div>
    </div>
    <div class="carousel-item">
    <div class="card">
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/189/310x210/imgl0095-1.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
        </div>
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/189/310x210/imgl0095-1.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
    </div>
        <div className='cardlitle'>
            <img src="https://shaurma-best.ru/assets/images/products/189/310x210/imgl0095-1.jpg" class="card-img-top" alt="..." />
            <button type="button" class="btn btn-dark" id='bth'>Заказать</button>
        </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default MainPage
