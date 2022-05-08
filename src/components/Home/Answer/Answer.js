import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <div className="answer container">
      <h2>What is the purpose of jwt and how does it work?</h2>
      <p>
        JWT, or JSON Web Token, is an open standard used to share information
        between two parties securely — a client and a server.It’s usually used
        in the context of other authentication mechanisms like OAuth, OpenID to
        share user-related information.JWT authentication is a token-based
        stateless authentication mechanism. It is popularly used as a
        client-side-based stateless session, this means the server doesn’t have
        to completely rely on a data store (or) database to save session
        information. <br />
        JWTs differ from other web tokens in that they contain a set of claims.
        The claim is used to transmit information between the two parties. What
        these claims are depends on the use at hand. For example, a claimant may
        claim who issued the token, how long it was valid, or what permission
        was granted to the client. A JWT is a string made up of three parts,
        separated by dots (.), and serialized using base64. In the most common
        serialization format, compact serialization, the JWT looks something
        like this: xxxxx.yyyyy.zzzzz. <br/>
        Once decoded, you will get two JSON
        strings: <br/>* The header and the payload.<br/>*  The signature.
      </p>
      <div className="mt-3">
        <h2>Difference between javascript and node js ?</h2>
        <table className="border">
          <tr>
            <th className="border">Javascript</th>
            <th className="border">Node Js</th>
          </tr>
          <tr>
            <td className="border">
              Javascript is a programming language that is used for writing
              scripts on the website.
            </td>
            <td className="border">
              NodeJS is a Javascript runtime environment.
            </td>
          </tr>
          <tr>
            <td className="border">
              Javascript is used in client-side development.
            </td>
            <td className="border">
              Nodejs is used in server-side development.
            </td>
          </tr>
          <tr>
            <td className="border">
              Javascript can only be run in the browsers.
            </td>
            <td className="border">
              We can run Javascript outside the browser with Node JS.
            </td>
          </tr>
          <tr>
            <td className="border">
              JavaScript is capable of adding HTML and playing with DOM.
            </td>
            <td className="border">
              Nodejs does not have capability to add HTML tags.
            </td>
          </tr>
          <tr>
            <td className="border">
              JavaScript can run on any browser engine, such as JS Core in
              Safari and SpiderMonkey in Firefox.
            </td>
            <td className="border">
              V8 is the JavaScript engine inside node.js that parses and runs
              JavaScript.
            </td>
          </tr>
          <tr>
            <td className="border">
              This is an upgraded version of the ECMA script that uses Chrome's
              V8 engine written in C ++.
            </td>
            <td className="border">
              Nodes are written in C, C ++ and JavaScript.
            </td>
          </tr>
        </table>
      </div>
      <div className="mt-3">
        <h2>Differences between sql and nosql databases ?</h2>
        <table className="border">
          <tr>
            <th className="border">SQL</th>
            <th className="border">NoSQL databases</th>
          </tr>
          <tr>
            <td className="border">SQL databases are vertically scalable.</td>
            <td className="border">
              NoSQL databases are horizontally scalable.
            </td>
          </tr>
          <tr>
            <td className="border">
              SQL databases are better for multi-row transactions.
            </td>
            <td className="border">
              NoSQL is better for unstructured data like documents or JSON.
            </td>
          </tr>
          <tr>
            <td className="border">SQL databases are relational.</td>
            <td className="border">NoSQL databases are non-relational.</td>
          </tr>
          <tr>
            <td className="border">SQL databases are table based databases.</td>
            <td className="border">
              NoSQL databases can be document based, key-value pairs
            </td>
          </tr>
          <tr>
            <td className="border">SQL databases are Not compositional.</td>
            <td className="border">NoSQL databases are Not compositional.</td>
          </tr>
          <tr>
            <td className="border">
              SQL databases use structured query language and have a predefined
              schema.
            </td>
            <td className="border">
              NoSQL databases have dynamic schemas for unstructured data.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Answer;
