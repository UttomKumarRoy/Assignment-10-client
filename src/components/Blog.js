import React from 'react';

const Blog = () => {
    return (
        <div> <br />
            <h2 className='text-white text-center bg-secondary rounded-5 p-3'>Please read this blog</h2> <br /> <br />
             <div className='bg-dark text-white p-2 rounded-3'>
                <h3>1. What is cors?</h3>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF). </p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>
                    We use firebase for these purposes <br />   
                    1. Cloud Messaging: Deliver and receive messages in a more reliable way across platforms <br />
                    2. Authentication: Have a lot less friction with acclaimed authentication <br />
                    3. Hosting: Deliver web content faster <br />
                    4. Remote Configuration: Customize your app on the go <br />
                    5. Test Lab: Test in the lab instead of on your users <br />
                    6. Crash Reporting: Keep your app stable <br />
                    7. Realtime Database: Store and sync app data in realtime <br />
                    8. Storage: File storing made easy <br />

                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>3. How does the private route work?</h3>
                <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div> <br />
            <div className='bg-dark text-white p-2 rounded-3'>
                <h3>3. What is Node? How does Node work?</h3>
                <p>
                    Node.js is an open source server environment. Node.js is free. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.). Node.js uses JavaScript on the server. <br />
                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
</p>
            </div> <br />
        </div>
    );
};

export default Blog;