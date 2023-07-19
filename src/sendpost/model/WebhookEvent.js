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

import ApiClient from '../ApiClient';
import QEmailMessage from './QEmailMessage';
import QEvent from './QEvent';

/**
 * The WebhookEvent model module.
 * @module sendpost/model/WebhookEvent
 * @version 1.0.0
 */
class WebhookEvent {
    /**
     * Constructs a new <code>WebhookEvent</code>.
     * @alias module:sendpost/model/WebhookEvent
     */
    constructor() { 
        
        WebhookEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:sendpost/model/WebhookEvent} obj Optional instance to populate.
     * @return {module:sendpost/model/WebhookEvent} The populated <code>WebhookEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookEvent();

            if (data.hasOwnProperty('event')) {
                obj['event'] = QEvent.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('emailMessage')) {
                obj['emailMessage'] = QEmailMessage.constructFromObject(data['emailMessage']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookEvent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookEvent</code>.
     */
    static validateJSON(data) {
        // validate the optional field `event`
        if (data['event']) { // data not null
          QEvent.validateJSON(data['event']);
        }
        // validate the optional field `emailMessage`
        if (data['emailMessage']) { // data not null
          QEmailMessage.validateJSON(data['emailMessage']);
        }

        return true;
    }

/**
     * @return {module:sendpost/model/QEvent}
     */
    getEvent() {
        return this.event;
    }

    /**
     * @param {module:sendpost/model/QEvent} event
     */
    setEvent(event) {
        this['event'] = event;
    }
/**
     * @return {module:sendpost/model/QEmailMessage}
     */
    getEmailMessage() {
        return this.emailMessage;
    }

    /**
     * @param {module:sendpost/model/QEmailMessage} emailMessage
     */
    setEmailMessage(emailMessage) {
        this['emailMessage'] = emailMessage;
    }

}



/**
 * @member {module:sendpost/model/QEvent} event
 */
WebhookEvent.prototype['event'] = undefined;

/**
 * @member {module:sendpost/model/QEmailMessage} emailMessage
 */
WebhookEvent.prototype['emailMessage'] = undefined;






export default WebhookEvent;
