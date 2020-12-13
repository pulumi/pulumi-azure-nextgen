// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180401
{
    public static class GetRouteFilterRule
    {
        public static Task<GetRouteFilterRuleResult> InvokeAsync(GetRouteFilterRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRouteFilterRuleResult>("azure-nextgen:network/v20180401:getRouteFilterRule", args ?? new GetRouteFilterRuleArgs(), options.WithVersion());
    }


    public sealed class GetRouteFilterRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the route filter.
        /// </summary>
        [Input("routeFilterName", required: true)]
        public string RouteFilterName { get; set; } = null!;

        /// <summary>
        /// The name of the rule.
        /// </summary>
        [Input("ruleName", required: true)]
        public string RuleName { get; set; } = null!;

        public GetRouteFilterRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRouteFilterRuleResult
    {
        /// <summary>
        /// The access type of the rule. Valid values are: 'Allow', 'Deny'
        /// </summary>
        public readonly string Access;
        /// <summary>
        /// The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
        /// </summary>
        public readonly ImmutableArray<string> Communities;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The rule type of the rule. Valid value is: 'Community'
        /// </summary>
        public readonly string RouteFilterRuleType;

        [OutputConstructor]
        private GetRouteFilterRuleResult(
            string access,

            ImmutableArray<string> communities,

            string etag,

            string? id,

            string? location,

            string? name,

            string provisioningState,

            string routeFilterRuleType)
        {
            Access = access;
            Communities = communities;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            RouteFilterRuleType = routeFilterRuleType;
        }
    }
}
