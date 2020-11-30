// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20190501.Outputs
{

    [OutputType]
    public sealed class IntegrationServiceEnvironmentPropertiesResponse
    {
        /// <summary>
        /// The encryption configuration.
        /// </summary>
        public readonly Outputs.IntegrationServiceEnvironmenEncryptionConfigurationResponse? EncryptionConfiguration;
        /// <summary>
        /// The endpoints configuration.
        /// </summary>
        public readonly Outputs.FlowEndpointsConfigurationResponse? EndpointsConfiguration;
        /// <summary>
        /// Gets the tracking id.
        /// </summary>
        public readonly string? IntegrationServiceEnvironmentId;
        /// <summary>
        /// The network configuration.
        /// </summary>
        public readonly Outputs.NetworkConfigurationResponse? NetworkConfiguration;
        /// <summary>
        /// The provisioning state.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// The integration service environment state.
        /// </summary>
        public readonly string? State;

        [OutputConstructor]
        private IntegrationServiceEnvironmentPropertiesResponse(
            Outputs.IntegrationServiceEnvironmenEncryptionConfigurationResponse? encryptionConfiguration,

            Outputs.FlowEndpointsConfigurationResponse? endpointsConfiguration,

            string? integrationServiceEnvironmentId,

            Outputs.NetworkConfigurationResponse? networkConfiguration,

            string? provisioningState,

            string? state)
        {
            EncryptionConfiguration = encryptionConfiguration;
            EndpointsConfiguration = endpointsConfiguration;
            IntegrationServiceEnvironmentId = integrationServiceEnvironmentId;
            NetworkConfiguration = networkConfiguration;
            ProvisioningState = provisioningState;
            State = state;
        }
    }
}
