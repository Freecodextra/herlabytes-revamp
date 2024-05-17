import React from 'react'
import "./solution.css"
import business from "../../images/business.png"
import technology from "../../images/technology.png"
import product from "../../images/product.png"
import team from "../../images/team.png"

function Solutions() {
  return (
    <div className='solutions'>
        <h1>Expertly Crafted Solutions for Your Business Growth</h1>
        <div className='solution-cards'>
            <div className='one'>
                <div className='card business'>
                    <div className='card-img'>
                        <img src={business} alt='business'></img>
                    </div>
                    <div className='card-text'>
                        <h6>business automation</h6>
                        <h4>Unleash Your Business's Full Potential with Our Comprehensive Business Automation</h4>
                        <p>Say Goodbye to Tedious Tasks, Minimize Human Error, and Boost Your Bottom Line Today! Our Customized Solutions are Designed to Optimize Your Operations, Enhance Collaboration, and Deliver  Results with Speed and Precision. From Project Management to Quality Assurance, Trust Us to Streamline Your Workflow, Boost  Your Productivity, and Drive Your Business to Success!</p>
                    </div>
                </div>
                <div className='card technology'>
                <div className='card-img'>
                        <img src={technology} alt='technology'></img>
                    </div>
                    <div className='card-text'>
                        <h6>technology strategy</h6>
                        <h4>Effective technology strategy essential for your business success.</h4>
                        <p>A well-defined technology strategy is critical for the success of any business. It involves evaluating the current technology landscape,  selecting appropriate tools and platforms, establishing development  methodologies, ensuring a robust infrastructure, and developing a plan for ongoing maintenance and updates. A well-defined technology strategy can enhance operational efficiency, competitive advantage,  risk management, and customer experience.</p>
                    </div>
                </div>
            </div>
            <div className='two'>
                <div className='card product'>
                <div className='card-img'>
                        <img src={product} alt='product'></img>
                    </div>
                    <div className='card-text'>
                        <h6>product engineering</h6>
                        <h4>Transform your business with innovative product engineering.</h4>
                        <p>Innovative product engineering can help businesses transform their  offerings, making them more user-friendly, efficient, and cost-effective.  By leveraging the latest engineering principles, design, and technology, businesses can stay ahead of the competition and provide customers  with better experiences. Whether creating new products or improving existing ones, a focus on product engineering is a key component of a successful business strategy.</p>
                    </div>
                </div>
                <div className='card team'>
                <div className='card-img'>
                        <img src={team} alt='team'></img>
                    </div>
                    <div className='card-text'>
                        <h6>team augmentation</h6>
                        <h4>Boost your team with our expert augmentation services.</h4>
                        <p>We help businesses maintain a competitive edge, achieve their goals,  and respond to changing market conditions. By supplementing their existing teams with external resources, businesses can gain access to  specialized expertise, increase productivity, reduce costs, and  maintain flexibility.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions