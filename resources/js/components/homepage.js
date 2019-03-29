import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Homepage extends Component {

    render() {
        return (
          <div className="container-fluid">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="https://via.placeholder.com/1920x450/6f42c1/000000" alt="First slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://via.placeholder.com/1920x450/aaaaaa/000000" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="https://via.placeholder.com/1920x450/22B24C/000000" alt="Third slide"/>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
          </div>
          <div className="container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget enim sed lacus posuere sagittis at vitae risus. Nam sodales ipsum ac mauris fermentum ultricies. Donec dui arcu, iaculis et arcu quis, blandit cursus dui. Nam vitae iaculis sapien. Nullam ac semper lacus. Nullam dignissim turpis neque, vel viverra nulla sagittis ut. Cras auctor odio et felis dictum, quis mattis lacus imperdiet. In convallis massa nec pretium gravida. Vivamus tempor ornare justo, non luctus sem ornare hendrerit. Praesent ornare erat sed mauris lacinia rhoncus. Praesent sagittis viverra dignissim. Phasellus fermentum tellus nisi, nec molestie erat laoreet non. Phasellus lacinia nibh libero.

Donec euismod varius tristique. Curabitur accumsan imperdiet elementum. Proin fermentum non ante id elementum. Integer id bibendum urna, in sagittis ipsum. Curabitur non arcu id eros gravida semper. Sed ullamcorper nisl dolor, nec dapibus urna egestas in. Nunc eget scelerisque metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet fringilla massa. Nam varius neque sed velit pharetra faucibus.

Nam sapien libero, euismod at magna sit amet, tempus lacinia eros. Nullam in volutpat risus, vitae venenatis mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ante sapien, sollicitudin eget tortor id, lacinia posuere augue. Maecenas pellentesque dolor non dui maximus interdum. Sed elementum ligula et tempus sollicitudin. Nullam dapibus mauris eu scelerisque aliquam. Donec ultricies ante nibh, et tincidunt dolor dapibus quis. Mauris massa sapien, egestas vitae semper non, posuere eu lectus. Proin ut ligula at nunc porta feugiat ut in massa. Sed lectus dui, ultrices vitae ante a, pulvinar accumsan dui. Suspendisse potenti. Duis vel magna lectus. Pellentesque in lobortis tortor. In vel lorem eu est efficitur tincidunt sed hendrerit felis. Phasellus venenatis rhoncus hendrerit.

Donec sed laoreet nulla. Sed euismod a neque vel vestibulum. Aliquam in nisl vestibulum, vestibulum nibh ac, egestas leo. Sed eu facilisis diam, a hendrerit dolor. Aliquam erat volutpat. Sed luctus vel nisi eget hendrerit. Aliquam leo massa, commodo at dui vel, tempor aliquam libero. Aliquam imperdiet urna ac quam hendrerit, eget rhoncus erat maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pellentesque elit a tincidunt facilisis. Nunc odio massa, bibendum id mattis vitae, gravida mollis magna. Maecenas suscipit id lectus pharetra congue. In risus orci, faucibus at purus at, gravida ornare nunc. Quisque vitae dolor sapien.

Donec volutpat orci vel diam commodo pulvinar. Etiam eu ligula posuere, posuere mauris at, feugiat ante. Praesent fermentum neque enim, at venenatis eros ornare ut. Phasellus commodo malesuada purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur congue ligula, vel egestas nunc vestibulum sed. Mauris non est vitae orci pulvinar dapibus. Nunc dapibus dui ut risus gravida, a posuere lorem luctus. Mauris ut vestibulum ante, id pulvinar quam. Ut fermentum lacus nulla, non dapibus dolor euismod sed. Cras scelerisque pharetra tempus. Ut ante nulla, convallis vitae laoreet quis, euismod vitae nunc. Curabitur ut dapibus nibh. Quisque commodo eget enim a elementum. Ut consectetur est non turpis varius, ac mattis diam feugiat.
          </div>
        </div>


        );
    }
}
