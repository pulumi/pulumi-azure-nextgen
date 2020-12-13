// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Scheduler.V20160101.Inputs
{

    public sealed class ServiceBusTopicMessageArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Gets or sets the authentication.
        /// </summary>
        [Input("authentication")]
        public Input<Inputs.ServiceBusAuthenticationArgs>? Authentication { get; set; }

        /// <summary>
        /// Gets or sets the brokered message properties.
        /// </summary>
        [Input("brokeredMessageProperties")]
        public Input<Inputs.ServiceBusBrokeredMessagePropertiesArgs>? BrokeredMessageProperties { get; set; }

        [Input("customMessageProperties")]
        private InputMap<string>? _customMessageProperties;

        /// <summary>
        /// Gets or sets the custom message properties.
        /// </summary>
        public InputMap<string> CustomMessageProperties
        {
            get => _customMessageProperties ?? (_customMessageProperties = new InputMap<string>());
            set => _customMessageProperties = value;
        }

        /// <summary>
        /// Gets or sets the message.
        /// </summary>
        [Input("message")]
        public Input<string>? Message { get; set; }

        /// <summary>
        /// Gets or sets the namespace.
        /// </summary>
        [Input("namespace")]
        public Input<string>? Namespace { get; set; }

        /// <summary>
        /// Gets or sets the topic path.
        /// </summary>
        [Input("topicPath")]
        public Input<string>? TopicPath { get; set; }

        /// <summary>
        /// Gets or sets the transport type.
        /// </summary>
        [Input("transportType")]
        public Input<Pulumi.AzureNextGen.Scheduler.V20160101.ServiceBusTransportType>? TransportType { get; set; }

        public ServiceBusTopicMessageArgs()
        {
        }
    }
}
