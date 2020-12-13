// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.Latest
{
    public static class GetTableServiceProperties
    {
        public static Task<GetTableServicePropertiesResult> InvokeAsync(GetTableServicePropertiesArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetTableServicePropertiesResult>("azure-nextgen:storage/latest:getTableServiceProperties", args ?? new GetTableServicePropertiesArgs(), options.WithVersion());
    }


    public sealed class GetTableServicePropertiesArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Table Service within the specified storage account. Table Service Name must be 'default'
        /// </summary>
        [Input("tableServiceName", required: true)]
        public string TableServiceName { get; set; } = null!;

        public GetTableServicePropertiesArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetTableServicePropertiesResult
    {
        /// <summary>
        /// Specifies CORS rules for the Table service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Table service.
        /// </summary>
        public readonly Outputs.CorsRulesResponse? Cors;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetTableServicePropertiesResult(
            Outputs.CorsRulesResponse? cors,

            string id,

            string name,

            string type)
        {
            Cors = cors;
            Id = id;
            Name = name;
            Type = type;
        }
    }
}
