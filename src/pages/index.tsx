import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import itsuki_rarity_src from 'assets/img/itsuki-rarity.png';
import left_flower_src from 'assets/img/left-flower.png';
import rezzsha_src from 'assets/img/rezzsha.png';
import right_flower_src from 'assets/img/right-flower.png';
import next_src from 'assets/img/next.png';
import prev_src from 'assets/img/prev.png';

import team_src from 'assets/img/team.png';
import vish from 'assets/img/vish.png';
import shanu from 'assets/img/shanu.png';
import leaf from 'assets/img/leaf.jpg';
import duo from 'assets/img/duo.png';
import derrick from 'assets/img/derrick.jpg';
import maheen from 'assets/img/maheen.png';
import poli from 'assets/img/poli.png';
import discord_src from 'assets/img/discord.png';
import twitter_src from 'assets/img/twitter.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const traits_list = [
    {
        title: 'Clothes',
        value: 72
    },
    {
        title: 'Body',
        value: 18
    },
    {
        title: 'Hair',
        value: 18
    },
    {
        title: 'Expressions',
        value: 24
    },
    {
        title: 'Hands',
        value: 10
    },
    {
        title: 'Accessories',
        value: 52
    },
    {
        title: 'Background',
        value: 42
    }
];

const faq_lists = [
    {
        title: 'What is Itsuki?',
        description: 'Itsuki is an NFT collection that resembles forest spirits.When Itsuki are ready to be born, the forest brings them into the physical realm through a birthing ceremony, these are the happiest times for the Itsuki and all the beings of the forest, laughter and drumbeat is heard all throughout the realm and some celebrations are rumored to have lasted months.'
    },
    {
        title: 'How is Itsuki created and who is the artist?',
        description: 'Itsuki NFTs are designed by Derrick. Derrick is the lead artist of Itsuki and her drawings of mythical creatures. She is a professional illustrator, a 3D animator, a storyboard artist from Ukraine who has worked as Head of Design for a larger company, she is fascinated by the world of Elves, and can sometimes be seen bringing joy to the world of cosplay. Her cheerful ways and funny videos make her quickly win over hearts, and her sheer endless artistic creativity brightens up the whole team’s day when there is another WIP to see.'
    },
    {
        title: 'What is the supply & mint price?',
        description: 'There will total of 6666 Itsuki be minted on the Ethereum blockchain to represents forests spirits. The mint price will be announced when we get closer to the mint.'
    },
    {
        title: 'When is the mint date?',
        description: '6th June 2022'
    }
];


const ItuskiHome = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'>
                <video className="video-background" width={'100%'} autoPlay loop muted playsInline>
                    <source src='/video/itsuki-braches.mp4' type="video/mp4" />
                </video>
            </div>

            <div className="fade-border" style={{ marginTop: '-40vh' }} />

            <div className='home-second-section'>
                <Row className='align-items-center' style={{ marginTop: '60px' }}>
                    <Col sm='6'>
                        <div className='d-flex flex-column description-padding'>
                            <span className='home-description-title'>
                                Rezzsha was the first Itsuki whose birth was a surprise.
                            </span>

                            <span className='home-description' style={{ marginTop: '50px' }}>
                                When Itsuki are ready to be born, the forest brings them into the physical realm through a birthing ceremony, these are the happiest times for the Itsuki and all the beings of the forest, laughter and drumbeat is heard all throughout the realm and some celebrations are rumored to have lasted months.
                            </span>
                        </div>
                    </Col>
                    <Col sm='6'>
                        <LazyLoadImage alt='rezzsha' src={rezzsha_src} width={'100%'} effect="blur" delayTime={300}/>
                    </Col>
                </Row>

                <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>ITSUKI RARITY</span>

                <div className='home-gap'>
                    <LazyLoadImage alt='rarity' src={itsuki_rarity_src} width={'100%'} effect="blur" delayTime={300}/>
                </div>
            </div>

            <div className='background-second-color' style={{ marginTop: '-15px' }}>
                <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>TRAITS</span>

                <div className='d-flex justify-content-end'>
                    <div className='left-image-margin-top' style={{ width: '50%' }}>
                        <LazyLoadImage alt='flower' src={left_flower_src} width={'100%'} effect="blur" delayTime={300}/>
                    </div>
                </div>

                <div className='home-container' style={{ marginTop: '-30px' }}>
                    <Row>
                        {
                            traits_list.map((row, index) => {
                                return (
                                    <Col xs='6' lg='4' xl='3' key={index} style={{ marginTop: '30px' }}>
                                        <div className='Trait-Card'>
                                            <span >{row.value}</span>
                                            <span>{row.title}</span>
                                        </div>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </div>

                <div className='d-flex justify-content-start'>
                    <div style={{ width: '50%', marginTop: '-30px' }}>
                        <LazyLoadImage alt='flower' src={right_flower_src} width={'100%'} effect="blur" delayTime={300}/>
                    </div>
                </div>

                <div>
                    <span className='d-flex justify-content-center home-sub-title'>ITUSKI BRANCHES</span>
                    <Carousel
                        nextIcon={<img src={next_src} width={'22%'} />}
                        nextLabel={''}
                        prevIcon={<img src={prev_src} width={'22%'} />}
                        prevLabel={''}
                        indicators={false}
                    >
                        <Carousel.Item interval={1000}>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'>ITUSKI <span>VISION</span></span>
                                            <span className='slider-section-description mt-5'>
                                                We at Itsuki adore nature. We believe that giving back to nature is an important element for human growth and existence. This extends into the animal kingdom aswell.
                                                <br /><br />
                                                We thrive on creating the greatest organic NFT community ever to explore and implement all the possibilities of bringing technology and nature together.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'><span>EMPOWER WOMEN ENTREPRENEURS</span></span>
                                            <span className='slider-section-description mt-5'>
                                                 Itsuki belives in women empowerment in Web3, hence we’re inviting all the women creators, gamers, developers and entreprenuers. Itsuki forest will provide help all the women who are willing to learn and start their own project.  
                                                <br /><br />
                                                Our aim is to empower more women in nft, women in tech and women in games.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                       
                        <Carousel.Item>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'><span>Values With Nature</span></span>
                                            <span className='slider-section-description value-nature mt-5'>
                                                Itsuki is a Japanese word that means Tree. The Itsuki are here to represent the spirits of the forest. Our goal is to create an ecosystem where real trees will add value to the Itsuki community. Here's how:
                                                <br /><br />
                                                Planting a real tree on every mint:  Itsuki supports carbon neutrality. We will be planting a real tree IRL on every mint and on secondary sales. Every tree will be connected to the holder's wallet and holds the Itsuki token ID.
                                                <br /><br />
                                                Values: Itsuki calculates the average amount of oxygen produced by the planted trees based on the rarity to airdrop $ITSUKI tokens which can be used in the ecosystem.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'>ITUSKI <span>FORESTVERSE</span></span>
                                            <span className='slider-section-description mt-5'>
                                                Itsuki represents the forest spirits and travels withing the roots of the forest’s trees. Itsuki holders will get all the access of the Itsuki Forestverse and will able to travel to other forests.
                                                <br /><br />
                                                P2E Tournaments: Delivering a great gaming experience in P2E with the physical utilities is Itsuki mission. Itsuki holders will also get the early access of all the Codemire games & projects.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div className='d-flex justify-content-center'>
                                <div className='w-75'>
                                    <div className='slider-section'>
                                        <div className='d-flex flex-column slider-description-box'>
                                            <span className='slider-section-title'>ITUSKI <span>MERCHANDISE </span></span>
                                            <span className='slider-section-description mt-5'>
                                                Members of the Itsuki forest will get access to exclusive Itsuki merchandise.  Itsuki will be partnering with multiple brands to bridge the physical and  the digital world with the Itsuki art style.
                                                
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>

                {/* photos part */}
                <div style={{ marginBottom: '120px' }}>
                    <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>TEAM</span>

                    <div className='home-container home-sub-title-margin-top '>
                        <Row style={{ rowGap: '30px' }}>
                        <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={vish} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>Vishnft.eth</p>
                                                    <p className='title'>Founder</p>
                                                </div>
                                            </div>
                            </Col>
                            <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={leaf} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>Leafswan.eth</p>
                                                    <p className='title'>Co-Founder</p>
                                                </div>
                                            </div>
                            </Col>
                            <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={derrick} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>Derrick</p>
                                                    <p className='title'>Lead Artist</p>
                                                </div>
                                            </div>
                            </Col>
                            <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={shanu} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>Shanu.eth</p>
                                                    <p className='title'>Smart Contract Developer</p>
                                                </div>
                                            </div>
                            </Col>
                            <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={poli} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>Yan</p>
                                                    <p className='title'>Artist</p>
                                                </div>
                                            </div>
                            </Col>
                            <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={duo} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>DuoCrypto.eth</p>
                                                    <p className='title'>Advisor</p>
                                                </div>
                                            </div>
                            </Col>
                            <Col sm='6' md='4' lg='3'>
                                            <div className='team-member-card'>
                                                <div style={{ background: '#D9D9D9' }}>
                                                    {/* <img src={team_src} style={{width:'100%', objectFit: 'cover'}}/> */}
                                                    <LazyLoadImage alt='team' src={maheen} width={'100%'} effect="blur" delayTime={300}/>
                                                </div>
                                                <div style={{ background: '#0E0B26', border: '1px solid gray', textAlign:'center'}}>
                                                    <p className='description'>Maheen</p>
                                                    <p className='title'>Community Manager</p>
                                                </div>
                                            </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <span className='d-flex justify-content-center home-sub-title home-sub-title-margin-top'>FAQ</span>

                {/** Collapse */}

                <div className='home-container home-sub-title-margin-top custom-accordion' style={{ gap: '30px' }}>
                    <Accordion>
                    {
                        faq_lists.map((faq_item, index) => {
                            return (
                                <Accordion.Item eventKey={index.toString()}>
                                    <Accordion.Header>
                                            <p className='faq-title' >
                                                <span>
                                                    { faq_item.title }
                                                </span>
                                            </p>   
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className='faq-description'>
                                            { faq_item.description.split('<br>').map(str => <p>{str}</p>) }
                                        </p>   
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        })
                    }
                    </Accordion>
                </div>
            </div>

            {/* footer  */}
            <div style={{ padding: '50px', backgroundColor:'black'}}>
                <span className='d-flex justify-content-center footer-title'>ITSUKI</span>
                <div className='text-center' style={{marginTop:"20px"}}>
                    <img src={discord_src} className='social-icons'/>
                    <img src={twitter_src} className='social-icons'/>
                </div>
                <div className='text-center'>
                    @Copyright { new Date().getFullYear() } &middot; Itsuki &middot; All rights reserverd 
                </div>
            </div>


        </>
    );
};

export default ItuskiHome;