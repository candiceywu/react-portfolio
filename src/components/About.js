import React from 'react';



function About() {
    return (
        <section className="about container">
            <div className="row">
                <div className="heading col-6">
                    <h1>about.</h1>
                </div>
                <div className="col-6">
                    <img src={require(`../assets/images/portrait.jpg`).default} alt="photo of Candice Wu" width="100%"/>
                    <p>I'm new here, but I think you are too.
                        <br />
                        <br />
                        I've spent my life working in ocean resource policy and resilience management, but I'm in the midst of switching career angles - as in, I still want to focus my life's energy on conservation and stewardship, but just through a new approach.
                        <br />
                        <br />
                        This year's goal is to couple my new skills in programming with my tried-and-true talents as a strategist and project manager to strengthen my contribution towards a collective effort. As technological advancements become more palpable, I want to ensure I'm right alongside these solutions as they tackle our global climate crisis.
                        <br />
                        <br />
                        As Jacques Cousteau once said: "The sea, the great unifier, is man's only hope. Now, as never before, the old phrase has a literal meaning: we are all in the same boat."
                        <br />
                        <br />
                        So, let's do this together.</p>
                </div>
            </div>
        </section>
    )
}

export default About;