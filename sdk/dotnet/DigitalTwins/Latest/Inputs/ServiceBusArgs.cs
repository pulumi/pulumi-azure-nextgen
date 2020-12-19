// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DigitalTwins.Latest.Inputs
{

    /// <summary>
    /// Properties related to ServiceBus.
    /// </summary>
    public sealed class ServiceBusArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the authentication type being used for connecting to the endpoint.
        /// </summary>
        [Input("authenticationType")]
        public InputUnion<string, Pulumi.AzureNextGen.DigitalTwins.Latest.AuthenticationType>? AuthenticationType { get; set; }

        /// <summary>
        /// Dead letter storage secret for key-based authentication. Will be obfuscated during read.
        /// </summary>
        [Input("deadLetterSecret")]
        public Input<string>? DeadLetterSecret { get; set; }

        /// <summary>
        /// Dead letter storage URL for identity-based authentication.
        /// </summary>
        [Input("deadLetterUri")]
        public Input<string>? DeadLetterUri { get; set; }

        /// <summary>
        /// The type of Digital Twins endpoint
        /// Expected value is 'ServiceBus'.
        /// </summary>
        [Input("endpointType", required: true)]
        public Input<string> EndpointType { get; set; } = null!;

        /// <summary>
        /// The URL of the ServiceBus namespace for identity-based authentication. It must include the protocol sb://
        /// </summary>
        [Input("endpointUri")]
        public Input<string>? EndpointUri { get; set; }

        /// <summary>
        /// The ServiceBus Topic name for identity-based authentication
        /// </summary>
        [Input("entityPath")]
        public Input<string>? EntityPath { get; set; }

        /// <summary>
        /// PrimaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
        /// </summary>
        [Input("primaryConnectionString")]
        public Input<string>? PrimaryConnectionString { get; set; }

        /// <summary>
        /// SecondaryConnectionString of the endpoint for key-based authentication. Will be obfuscated during read.
        /// </summary>
        [Input("secondaryConnectionString")]
        public Input<string>? SecondaryConnectionString { get; set; }

        public ServiceBusArgs()
        {
        }
    }
}
