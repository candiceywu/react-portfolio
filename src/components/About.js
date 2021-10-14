import React from 'react';


function About() {
    return (
        <section className="about" id="about">
            <div className="heading">
                <h1 className="title">about.</h1>
            </div>
            <div className="blurb">
                <img src='../../assets/images/portrait.png' alt="photo of Candice Wu" />
            </div>
            <div>
                <p>I'm new here, but I think you are too.
                    <br />
                    I've spent my life working in ocean resource policy and resilience management, but I'm in the midst of switching career angles - as in, I still want to focus my life's energy on conservation and stewardship, but just through a new approach.
                    <br />

                    This year's goal is to couple my new skills in programming with my tried-and-true talents as a strategist and project manager to strengthen my contribution towards a collective effort. As technological advancements become more palpable, I want to ensure I'm right alongside these solutions as they tackle our global climate crisis.
                    <br />
                    As Jacques Cousteau once said: "The sea, the great unifier, is man's only hope. Now, as never before, the old phrase has a literal meaning: we are all in the same boat."
                    <br />
                    So, let's do this together.</p>
            </div>
        </section>
    )
}

export default About;