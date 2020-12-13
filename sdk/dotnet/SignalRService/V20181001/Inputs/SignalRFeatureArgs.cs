// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.SignalRService.V20181001.Inputs
{

    /// <summary>
    /// Feature of a SignalR resource, which controls the SignalR runtime behavior.
    /// </summary>
    public sealed class SignalRFeatureArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// FeatureFlags is the supported features of Azure SignalR service.
        /// - ServiceMode: Flag for backend server for SignalR service. Values allowed: "Default": have your own backend server; "Serverless": your application doesn't have a backend server; "Classic": for backward compatibility. Support both Default and Serverless mode but not recommended; "PredefinedOnly": for future use.
        /// - EnableConnectivityLogs: "true"/"false", to enable/disable the connectivity log category respectively.
        /// </summary>
        [Input("flag", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.SignalRService.V20181001.FeatureFlags> Flag { get; set; } = null!;

        [Input("properties")]
        private InputMap<string>? _properties;

        /// <summary>
        /// Optional properties related to this feature.
        /// </summary>
        public InputMap<string> Properties
        {
            get => _properties ?? (_properties = new InputMap<string>());
            set => _properties = value;
        }

        /// <summary>
        /// Value of the feature flag. See Azure SignalR service document https://docs.microsoft.com/azure/azure-signalr/ for allowed values.
        /// </summary>
        [Input("value", required: true)]
        public Input<string> Value { get; set; } = null!;

        public SignalRFeatureArgs()
        {
        }
    }
}
