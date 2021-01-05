// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.Latest
{
    public static class GetAFDCustomDomain
    {
        public static Task<GetAFDCustomDomainResult> InvokeAsync(GetAFDCustomDomainArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAFDCustomDomainResult>("azure-nextgen:cdn/latest:getAFDCustomDomain", args ?? new GetAFDCustomDomainArgs(), options.WithVersion());
    }


    public sealed class GetAFDCustomDomainArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the domain under the profile which is unique globally.
        /// </summary>
        [Input("customDomainName", required: true)]
        public string CustomDomainName { get; set; } = null!;

        /// <summary>
        /// Name of the CDN profile which is unique within the resource group.
        /// </summary>
        [Input("profileName", required: true)]
        public string ProfileName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetAFDCustomDomainArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAFDCustomDomainResult
    {
        /// <summary>
        /// Resource reference to the Azure DNS zone
        /// </summary>
        public readonly Outputs.ResourceReferenceResponse? AzureDnsZone;
        public readonly string DeploymentStatus;
        /// <summary>
        /// Provisioning substate shows the progress of custom HTTPS enabling/disabling process step by step. DCV stands for DomainControlValidation.
        /// </summary>
        public readonly string DomainValidationState;
        /// <summary>
        /// The host name of the domain. Must be a domain name.
        /// </summary>
        public readonly string HostName;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning status
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Read only system data
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// The configuration specifying how to enable HTTPS for the domain - using AzureFrontDoor managed certificate or user's own certificate. If not specified, enabling ssl uses AzureFrontDoor managed certificate by default.
        /// </summary>
        public readonly Outputs.AFDDomainHttpsParametersResponse? TlsSettings;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Values the customer needs to validate domain ownership
        /// </summary>
        public readonly Outputs.DomainValidationPropertiesResponse ValidationProperties;

        [OutputConstructor]
        private GetAFDCustomDomainResult(
            Outputs.ResourceReferenceResponse? azureDnsZone,

            string deploymentStatus,

            string domainValidationState,

            string hostName,

            string id,

            string name,

            string provisioningState,

            Outputs.SystemDataResponse systemData,

            Outputs.AFDDomainHttpsParametersResponse? tlsSettings,

            string type,

            Outputs.DomainValidationPropertiesResponse validationProperties)
        {
            AzureDnsZone = azureDnsZone;
            DeploymentStatus = deploymentStatus;
            DomainValidationState = domainValidationState;
            HostName = hostName;
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            SystemData = systemData;
            TlsSettings = tlsSettings;
            Type = type;
            ValidationProperties = validationProperties;
        }
    }
}