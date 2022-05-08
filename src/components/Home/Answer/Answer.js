import React from "react";
import "./Answer.css";

const Answer = () => {
  return (
    <div className="answer container">
      <h2>What is the purpose of jwt and how does it work?</h2>
      <p>
        React is a JavaScript library (not a framework) that creates user
        interfaces (UIs) in a predictable and efficient way using declarative
        code. You can use it to help build single page applications and mobile
        apps, or to build complex apps if you utilise it with other libraries.
        Alongside Angular, and more recently Vue, React is a critical tool that
        has had a big impact on the way we build web applications. While
        building client-side apps, a team of Facebook developers realized that
        the DOM is slow.So, to make it faster, React implements a virtual DOM
        that is basically a DOM tree representation in JavaScript. So when it
        needs to read or write to the DOM, it will use the virtual
        representation of it. Then the virtual DOM will try to find the most
        efficient way to update the browser’s DOM.Unlike browser DOM elements,
        React elements are plain objects and are cheap to create. React DOM
        takes care of updating the DOM to match the React elements. The reason
        for this is that JavaScript is very fast and it’s worth keeping a DOM
        tree in it to speed up its manipulation. Although React was conceived to
        be used in the browser, because of its design it can also be used in the
        server with Node.js.
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
