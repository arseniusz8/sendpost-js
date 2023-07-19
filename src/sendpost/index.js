/**
 * SendPost API
 * Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: hello@sendpost.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Attachment from './model/Attachment';
import City from './model/City';
import CopyTo from './model/CopyTo';
import Device from './model/Device';
import EmailMessage from './model/EmailMessage';
import EmailResponse from './model/EmailResponse';
import EventMetadata from './model/EventMetadata';
import From from './model/From';
import Os from './model/Os';
import QEmailMessage from './model/QEmailMessage';
import QEvent from './model/QEvent';
import ReplyTo from './model/ReplyTo';
import To from './model/To';
import UserAgent from './model/UserAgent';
import WebhookEvent from './model/WebhookEvent';
import EmailApi from './api/EmailApi';


/**
* Email API and SMTP relay to not just send and measure email sending, but also alert and optimise. We provide you with tools, expertise and support needed to reliably deliver emails to your customers inboxes on time, every time..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var sendpost = require('sendpost/index'); // See note below*.
* var xxxSvc = new sendpost.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new sendpost.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['sendpost/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new sendpost.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new sendpost.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module sendpost/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:sendpost/ApiClient}
     */
    ApiClient,

    /**
     * The Attachment model constructor.
     * @property {module:sendpost/model/Attachment}
     */
    Attachment,

    /**
     * The City model constructor.
     * @property {module:sendpost/model/City}
     */
    City,

    /**
     * The CopyTo model constructor.
     * @property {module:sendpost/model/CopyTo}
     */
    CopyTo,

    /**
     * The Device model constructor.
     * @property {module:sendpost/model/Device}
     */
    Device,

    /**
     * The EmailMessage model constructor.
     * @property {module:sendpost/model/EmailMessage}
     */
    EmailMessage,

    /**
     * The EmailResponse model constructor.
     * @property {module:sendpost/model/EmailResponse}
     */
    EmailResponse,

    /**
     * The EventMetadata model constructor.
     * @property {module:sendpost/model/EventMetadata}
     */
    EventMetadata,

    /**
     * The From model constructor.
     * @property {module:sendpost/model/From}
     */
    From,

    /**
     * The Os model constructor.
     * @property {module:sendpost/model/Os}
     */
    Os,

    /**
     * The QEmailMessage model constructor.
     * @property {module:sendpost/model/QEmailMessage}
     */
    QEmailMessage,

    /**
     * The QEvent model constructor.
     * @property {module:sendpost/model/QEvent}
     */
    QEvent,

    /**
     * The ReplyTo model constructor.
     * @property {module:sendpost/model/ReplyTo}
     */
    ReplyTo,

    /**
     * The To model constructor.
     * @property {module:sendpost/model/To}
     */
    To,

    /**
     * The UserAgent model constructor.
     * @property {module:sendpost/model/UserAgent}
     */
    UserAgent,

    /**
     * The WebhookEvent model constructor.
     * @property {module:sendpost/model/WebhookEvent}
     */
    WebhookEvent,

    /**
    * The EmailApi service constructor.
    * @property {module:sendpost/api/EmailApi}
    */
    EmailApi
};
