import { Card } from 'flowbite-react';
import React from 'react';
import useTitle from '../UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <Card className='text-center lg:w-2/3 mx-auto mt-5 mb-5'>
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    What is JWT? and how does it work?
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    ** JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
                    ** JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.
                </p>

            </Card>
            <Card className='text-center lg:w-2/3 mx-auto mb-5'>
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    Defference between SQL and No SQL?
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    SQL : RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS), These databases have fixed or static or predefined schema, These databases are not suited for hierarchical data storage. These databases are best suited for complex queries, Follows ACID property, Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc. <br />
                    NoSQL : Non-relational or distributed database system. They have dynamic schema, These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. Horizontally scalable. 	Follows CAP(consistency, availability, partition tolerance). Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.
                </p>

            </Card>
            <Card className='text-center lg:w-2/3 mx-auto mb-5'>
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    What is the difference between javascript and nodeJs?
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.
                </p>

            </Card>
            <Card className='text-center lg:w-2/3 mx-auto mb-5'>
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    How does NodeJs handle multiple requests at the same time?
                </h5>
                <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>

            </Card>
        </div>
    );
};

export default Blog;