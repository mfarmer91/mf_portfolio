import React, { Component } from 'react';
import '../styles/Resume.css';


const Resume = () => (
    <div id='resume_ctn'>
        <h1 id='resume_header'>Resume</h1>
        <div id='highlights_ctn' className='ui inverted segment'>
            <div className="left aligned content">
                <h2 className="header">Highlights</h2>
                <div id='highlights_text' className="description">
                  <p>Front-end web developer with specialized skills in React and Javascript.  Cross-cultural communicator and citizen of the world -- specifically having lived in London, Florence, Copenhagen and Saint Petersburg.  Capable of applying high-level communication and technical programming skills in a deadline-oriented environment.  Additional skills include: proficiency in Adobe Creative Suite, working knowledge of Russian and Italian.</p>
                </div>
              </div>
        </div>


        <div id='languages_ctn' className='ui inverted segment'>
            <div className="left aligned content">
                <h2 className="header">Languages</h2>
                <div className="description">
                  <p><span id='language_subheader_programming'>Programming:</span> Javascript, React, JQuery, HTML, CSS</p>
                </div>
                <div className="description">
                  <p><span id='language_subheader_foreign'>Foreign:</span> English (native speaker), Italian (near-fluency), Russian (intermediate), French (elementary)</p>
                </div>
              </div>
        </div>
    
    
         <div id='work_experience_ctn' className='ui inverted segment'>
            <div className="left aligned content">
                <h2 className="medium header">Work Experience</h2>
                <h4 className='sub_header'>MikeBuildsSites.com - Global <span id='date_one'> 2017 - present</span></h4>
                <div className='resume_line_two'>Founder</div>
                    <div className="description">
                        <ul>
                            <li>Building custom, static and dynamic websites in React and Wordpress.</li>
                            <li>Augmenting and realizing client brand-strategy goals.</li>
                        </ul>
                </div>
    
    
             <h4 className='sub_header'>804RVA.com - Richmond, VA <span id='date_two'> 2017 - present</span></h4>
                <div className='resume_line_two'>Lead Co-Workaholic</div>
                    <div className="description">
                        <ul>
                            <li>Managing daily operations of technology co-working space.</li>
                            <li>Building freelance React web applications with fellow entrepreneurial  co-workers.</li>
                            <li>Assisting co-workers troubleshooting tech equipment.</li>
                        </ul>
                </div>
                
                
    
                <h4 className='sub_header'>Crate & Barrel -- Richmond, VA<span id='date_three'> 2017 - present</span></h4>
                 <div className='resume_line_two'>Merchandiser</div>
                    <div className="description">
                        <ul>
                            <li>Utilizing back-of-house Crate & Barrel software to capture, process and fufill on-site (BOP) domestic orders.</li>
                            <li>Maintaining accurate digital and physical inventory records according to Micro Focus RUMBA software inventory counts.</li>
                            <li>Managing and implementing seasonal inventory transfers to regional warehouses using back-of-house software.</li>
                        </ul>
                    </div>


                 <h4 className='sub_header'>Freeman's Auction -- Philadelphia, PA<span id='date_four'> 2016 - 2017</span></h4>
                <div className='resume_line_two'>Junior Cataloger, Furniture, Silver, Decorative Arts</div>
                
                    <div className="description">
                        <ul>
                            <li>Edited and produced digital and print retail-style catalogues displaying curated selections of rare, one-of-a-kind art objects.</li>
                            <li>Acted as property manager, overseeing furniture and decorative arts departments.</li>
                            <li>Facilitated the shipping and receiving of art objects.</li>
                            <li>Performed as sales liaison between Freeman’s and international clientele.</li>
                            <li>Cataloged and facilitated online sale of the last remaining items in the collection of the late Malcolm Forbes.</li>
                        </ul>
                    </div>

                <h4 className='sub_header'>Freeman's Auction -- Richmond, VA<span id='date_five'> 2015 - 2016</span></h4>
                <div className='resume_line_two'>Art Handler</div>
                
                    <div className="description">
                        <ul>
                            <li>Assisted auction specialists packaging and shipping art objects from clients' residences.</li>
                            <li>Performed as gallery assistant during Richmond auction previews.</li>
                        </ul>
                    </div>

                 <h4 className='sub_header'>MYL Collective -- Global<span id='date_six'> Dec 2014 - May 2015</span></h4>
                <div className='resume_line_two'>Owner/Founder</div>
                
                    <div className="description">
                        <ul>
                            <li>Designed and managed ecommerce store through Worpress; specializing in selling 20th and 21st century art and design.</li>
                            <li>PFacilitated all stages of business transactions: website maintenance, generation of copy, photography, customer service and delivery.</li>
                        </ul>
                    </div>

                <h4 className='sub_header'>Keno Auctions -- New York, NY<span id='date_seven'> Dec 2014 - Feb 2015</span></h4>
                <div className='resume_line_two'>Temporary Arts Copywriter</div>
                
                    <div className="description">
                        <ul>
                            <li>Maintained and designed digital catalogues through WordPress and online auction platforms.</li>
                            <li>Created custom marketing emails and event invites through Constant Contact.</li>
                            <li>Executed engaging, well-researched catalogue design and copy of multiple one-of-a-kind objects.</li>
                        </ul>
                    </div>


                    <h4 className='sub_header'>Leonardo Leather Works -- Florence, Italy<span id='date_eight'> May 2014-Sept 2014</span></h4>
                     <div className='resume_line_two'>Educator and Sales Specialist</div>
                
                    <div className="description">
                        <ul>
                            <li>Performed solo demonstrations on history of Florentine leather to large groups (10-50+) of foreign tourists.</li>
                            <li>Communicated with staff members and clients in English and Italian.</li>
                            <li>Maintained shop floor of expensive, bespoke leather products.</li>
                        </ul>
                    </div>
                     
                    <h4 className='sub_header'>Quinn & Farmer Auctions -- Charlottesville, VA<span id='date_nine'> 2013-2014</span></h4>
                    <div className='resume_line_two'>Client Services and Social Media Specialist</div>
                
                    <div className="description">
                        <ul>
                            <li>Generated copy on all periods of one-of-a-kind objects, ranging from gothic revival to modern.</li>
                            <li>Edited 10+ online and print catalogs — including 300 to 400 objects each.</li>
                            <li>Operated all social media platforms: Facebook, Twitter, blog.</li>
                            <li>Facilitated consignment and purchase of objects before, during, and after sale.</li> 
                        </ul>
                    </div>
                  
                     <h4 className='sub_header'>Antiques Roadshow -- Cincinnati, OH + Richmond, VA<span id='date_ten'> July 2012, July 2013</span></h4>
                    <div className='resume_line_two'>Executive Producer Assistant</div>
                
                    <div className="description">
                        <ul>
                            <li>Generated copy on all periods of one-of-a-kind objects, ranging from gothic revival to modern.</li>
                            <li>Edited 10+ online and print catalogs — including 300 to 400 objects each.</li>
                            <li>Operated all social media platforms: Facebook, Twitter, blog.</li>
                            <li>Facilitated consignment and purchase of objects before, during, and after sale.</li> 
                        </ul>
                    </div>

              </div>
        </div>
    
    </div>
);

export default Resume;