// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Addons.Latest
{
    public static class GetSupportPlanType
    {
        public static Task<GetSupportPlanTypeResult> InvokeAsync(GetSupportPlanTypeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSupportPlanTypeResult>("azure-nextgen:addons/latest:getSupportPlanType", args ?? new GetSupportPlanTypeArgs(), options.WithVersion());
    }


    public sealed class GetSupportPlanTypeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Canonical support plan type.
        /// </summary>
        [Input("planTypeName", required: true)]
        public string PlanTypeName { get; set; } = null!;

        /// <summary>
        /// The support plan type. For now the only valid type is "canonical".
        /// </summary>
        [Input("providerName", required: true)]
        public string ProviderName { get; set; } = null!;

        public GetSupportPlanTypeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSupportPlanTypeResult
    {
        /// <summary>
        /// The id of the ARM resource, e.g. "/subscriptions/{id}/providers/Microsoft.Addons/supportProvider/{supportProviderName}/supportPlanTypes/{planTypeName}".
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the Canonical support plan, i.e. "essential", "standard" or "advanced".
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Microsoft.Addons/supportProvider
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetSupportPlanTypeResult(
            string id,

            string name,

            string? provisioningState,

            string type)
        {
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
