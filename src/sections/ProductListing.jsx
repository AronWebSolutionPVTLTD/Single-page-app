import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductListing() {
  return (
    <section className='qtec-sectionMargin'>
        <div className="container">
            <h3 className='qtec-tag mb-0 text-center text-capitalize mb-1'>Top products</h3>
            <p className='text-black subtitle text-center mb-5'>Obelixis is where performance meets purpose.<br />
            Let's build something better - together.</p>
        <div className='row'>
        {Array.from({ length: 6 }).map((_, idx) => (
        <div className='col-12 col-md-6 col-lg-4 mb-4' key={idx}>
            <Card className='prod_card'>
                <Card.Img variant="top" src="/images/hero4.png" />
                <Card.Body>
                <Card.Title>Product Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button className='w-100 qtec-btn m-0 buybtn' variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
        ))}
    </div>
        </div>
    </section>
  )
}