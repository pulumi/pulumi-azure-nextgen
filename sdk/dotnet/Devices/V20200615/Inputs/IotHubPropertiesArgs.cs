// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20200615.Inputs
{

    /// <summary>
    /// The properties of an IoT hub.
    /// </summary>
    public sealed class IotHubPropertiesArgs : Pulumi.ResourceArgs
    {
        [Input("authorizationPolicies")]
        private InputList<Inputs.SharedAccessSignatureAuthorizationRuleArgs>? _authorizationPolicies;

        /// <summary>
        /// The shared access policies you can use to secure a connection to the IoT hub.
        /// </summary>
        public InputList<Inputs.SharedAccessSignatureAuthorizationRuleArgs> AuthorizationPolicies
        {
            get => _authorizationPolicies ?? (_authorizationPolicies = new InputList<Inputs.SharedAccessSignatureAuthorizationRuleArgs>());
            set => _authorizationPolicies = value;
        }

        /// <summary>
        /// The IoT hub cloud-to-device messaging properties.
        /// </summary>
        [Input("cloudToDevice")]
        public Input<Inputs.CloudToDevicePropertiesArgs>? CloudToDevice { get; set; }

        /// <summary>
        /// IoT hub comments.
        /// </summary>
        [Input("comments")]
        public Input<string>? Comments { get; set; }

        /// <summary>
        /// If True, file upload notifications are enabled.
        /// </summary>
        [Input("enableFileUploadNotifications")]
        public Input<bool>? EnableFileUploadNotifications { get; set; }

        [Input("eventHubEndpoints")]
        private InputMap<Inputs.EventHubPropertiesArgs>? _eventHubEndpoints;

        /// <summary>
        /// The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
        /// </summary>
        public InputMap<Inputs.EventHubPropertiesArgs> EventHubEndpoints
        {
            get => _eventHubEndpoints ?? (_eventHubEndpoints = new InputMap<Inputs.EventHubPropertiesArgs>());
            set => _eventHubEndpoints = value;
        }

        /// <summary>
        /// The capabilities and features enabled for the IoT hub.
        /// </summary>
        [Input("features")]
        public InputUnion<string, Pulumi.AzureNextGen.Devices.V20200615.Capabilities>? Features { get; set; }

        [Input("ipFilterRules")]
        private InputList<Inputs.IpFilterRuleArgs>? _ipFilterRules;

        /// <summary>
        /// The IP filter rules.
        /// </summary>
        public InputList<Inputs.IpFilterRuleArgs> IpFilterRules
        {
            get => _ipFilterRules ?? (_ipFilterRules = new InputList<Inputs.IpFilterRuleArgs>());
            set => _ipFilterRules = value;
        }

        [Input("messagingEndpoints")]
        private InputMap<Inputs.MessagingEndpointPropertiesArgs>? _messagingEndpoints;

        /// <summary>
        /// The messaging endpoint properties for the file upload notification queue.
        /// </summary>
        public InputMap<Inputs.MessagingEndpointPropertiesArgs> MessagingEndpoints
        {
            get => _messagingEndpoints ?? (_messagingEndpoints = new InputMap<Inputs.MessagingEndpointPropertiesArgs>());
            set => _messagingEndpoints = value;
        }

        /// <summary>
        /// Specifies the minimum TLS version to support for this hub. Can be set to "1.2" to have clients that use a TLS version below 1.2 to be rejected.
        /// </summary>
        [Input("minTlsVersion")]
        public Input<string>? MinTlsVersion { get; set; }

        [Input("privateEndpointConnections")]
        private InputList<Inputs.PrivateEndpointConnectionArgs>? _privateEndpointConnections;

        /// <summary>
        /// Private endpoint connections created on this IotHub
        /// </summary>
        public InputList<Inputs.PrivateEndpointConnectionArgs> PrivateEndpointConnections
        {
            get => _privateEndpointConnections ?? (_privateEndpointConnections = new InputList<Inputs.PrivateEndpointConnectionArgs>());
            set => _privateEndpointConnections = value;
        }

        /// <summary>
        /// Whether requests from Public Network are allowed
        /// </summary>
        [Input("publicNetworkAccess")]
        public InputUnion<string, Pulumi.AzureNextGen.Devices.V20200615.PublicNetworkAccess>? PublicNetworkAccess { get; set; }

        /// <summary>
        /// The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
        /// </summary>
        [Input("routing")]
        public Input<Inputs.RoutingPropertiesArgs>? Routing { get; set; }

        [Input("storageEndpoints")]
        private InputMap<Inputs.StorageEndpointPropertiesArgs>? _storageEndpoints;

        /// <summary>
        /// The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.
        /// </summary>
        public InputMap<Inputs.StorageEndpointPropertiesArgs> StorageEndpoints
        {
            get => _storageEndpoints ?? (_storageEndpoints = new InputMap<Inputs.StorageEndpointPropertiesArgs>());
            set => _storageEndpoints = value;
        }

        public IotHubPropertiesArgs()
        {
        }
    }
}
