// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20200301.Inputs
{

    /// <summary>
    /// The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint.
    /// </summary>
    public sealed class FallbackRoutePropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
        /// </summary>
        [Input("condition")]
        public Input<string>? Condition { get; set; }

        [Input("endpointNames", required: true)]
        private InputList<string>? _endpointNames;

        /// <summary>
        /// The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
        /// </summary>
        public InputList<string> EndpointNames
        {
            get => _endpointNames ?? (_endpointNames = new InputList<string>());
            set => _endpointNames = value;
        }

        /// <summary>
        /// Used to specify whether the fallback route is enabled.
        /// </summary>
        [Input("isEnabled", required: true)]
        public Input<bool> IsEnabled { get; set; } = null!;

        /// <summary>
        /// The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The source to which the routing rule is to be applied to. For example, DeviceMessages
        /// </summary>
        [Input("source", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Devices.V20200301.RoutingSource> Source { get; set; } = null!;

        public FallbackRoutePropertiesArgs()
        {
        }
    }
}
