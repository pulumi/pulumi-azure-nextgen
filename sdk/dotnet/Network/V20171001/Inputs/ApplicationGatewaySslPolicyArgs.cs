// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20171001.Inputs
{

    /// <summary>
    /// Application Gateway Ssl policy.
    /// </summary>
    public sealed class ApplicationGatewaySslPolicyArgs : Pulumi.ResourceArgs
    {
        [Input("cipherSuites")]
        private InputList<Union<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslCipherSuite>>? _cipherSuites;

        /// <summary>
        /// Ssl cipher suites to be enabled in the specified order to application gateway.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslCipherSuite>> CipherSuites
        {
            get => _cipherSuites ?? (_cipherSuites = new InputList<Union<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslCipherSuite>>());
            set => _cipherSuites = value;
        }

        [Input("disabledSslProtocols")]
        private InputList<Union<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslProtocol>>? _disabledSslProtocols;

        /// <summary>
        /// Ssl protocols to be disabled on application gateway.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslProtocol>> DisabledSslProtocols
        {
            get => _disabledSslProtocols ?? (_disabledSslProtocols = new InputList<Union<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslProtocol>>());
            set => _disabledSslProtocols = value;
        }

        /// <summary>
        /// Minimum version of Ssl protocol to be supported on application gateway.
        /// </summary>
        [Input("minProtocolVersion")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslProtocol>? MinProtocolVersion { get; set; }

        /// <summary>
        /// Name of Ssl predefined policy
        /// </summary>
        [Input("policyName")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslPolicyName>? PolicyName { get; set; }

        /// <summary>
        /// Type of Ssl Policy
        /// </summary>
        [Input("policyType")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20171001.ApplicationGatewaySslPolicyType>? PolicyType { get; set; }

        public ApplicationGatewaySslPolicyArgs()
        {
        }
    }
}
