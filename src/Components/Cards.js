import * as React from "react";
import "./style.css";
import {
 Button,
 Card,
 Accordion,
 Row,
 Col,
 Image,
 CardGroup
} from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { right } from "@popperjs/core";
import logo from "./sample.jpg";
import { FaWeight } from "react-icons/fa";
 
function Cards() {
 search = query => {
	console.log("page:",this.state.page,this.state.per_page);
	 var url;
	 if(query!==""){	
		 console.log("none")
	 url = `https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=${this.state.per_page}&beer_name=${query}`;}
	else{
	 url = `https://api.punkapi.com/v2/beers?page=1&per_page=${this.state.per_page}`;}
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
           console.log("oo",data)
          this.setState({ people: data });
        
      });
  };

  componentDidMount() {
	// Detect when scrolled to bottom.
	this.search("");
    this.refs.myscroll.addEventListener("scroll", () => {
      if (
        this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
        this.refs.myscroll.scrollHeight
      ) {
		this.loadMore();
		if(this.state.per_page<100)
		this.search("");
      }
	});
}

loadMore=()=>{
    this.setState({ loading: true });
    setTimeout(() => {
        this.setState({ page: this.state.page + 1, loading: false, per_page:this.state.per_page+25 });
    }, 200);
}

onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };
 // get cards or filter using search input
 return (getCardData = function() {
  let items = this.state.people;
  console.log("here",this.state.people);
  return items
   .filter(item => {
    if (this.state.search == null) return item;
    else if (
     item.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
     item.description.toLowerCase().includes(this.state.search.toLowerCase())
    ) {
     return item;
    }
   })
   .map((item, index) => (
<div class="product_card" >
    <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src={item.image_url} className="product_image img-fluid" alt="" width={200} height={200}/>
            </div>
            <div class="col">
                <div class="card-block px-10 py-10">
                    <h4 class="card_title card-title">{item.name}</h4>
                    <p class="description_text card-text">{item.description}</p>
                    {/* <a href="#" class="btn btn-primary">BUTTON</a> */}
                </div>
            </div>
        </div>
        {/* <div class="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div> */}
    </div>
</div>
   ));
 })

 }