// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.V20170401Preview.Inputs
{

    /// <summary>
    /// Describes a Service Bus Topic output data source.
    /// </summary>
    public sealed class ServiceBusTopicOutputDataSourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Authentication Mode.
        /// </summary>
        [Input("authenticationMode")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.V20170401Preview.AuthenticationMode>? AuthenticationMode { get; set; }

        [Input("propertyColumns")]
        private InputList<string>? _propertyColumns;

        /// <summary>
        /// A string array of the names of output columns to be attached to Service Bus messages as custom properties.
        /// </summary>
        public InputList<string> PropertyColumns
        {
            get => _propertyColumns ?? (_propertyColumns = new InputList<string>());
            set => _propertyColumns = value;
        }

        /// <summary>
        /// The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("serviceBusNamespace")]
        public Input<string>? ServiceBusNamespace { get; set; }

        /// <summary>
        /// The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("sharedAccessPolicyKey")]
        public Input<string>? SharedAccessPolicyKey { get; set; }

        /// <summary>
        /// The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("sharedAccessPolicyName")]
        public Input<string>? SharedAccessPolicyName { get; set; }

        [Input("systemPropertyColumns")]
        private InputMap<string>? _systemPropertyColumns;
        public InputMap<string> SystemPropertyColumns
        {
            get => _systemPropertyColumns ?? (_systemPropertyColumns = new InputMap<string>());
            set => _systemPropertyColumns = value;
        }

        /// <summary>
        /// The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("topicName")]
        public Input<string>? TopicName { get; set; }

        /// <summary>
        /// Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
        /// Expected value is 'Microsoft.ServiceBus/Topic'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public ServiceBusTopicOutputDataSourceArgs()
        {
        }
    }
}
