// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    public static class ListWebAppAzureStorageAccounts
    {
        public static Task<ListWebAppAzureStorageAccountsResult> InvokeAsync(ListWebAppAzureStorageAccountsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListWebAppAzureStorageAccountsResult>("azure-nextgen:web/v20200901:listWebAppAzureStorageAccounts", args ?? new ListWebAppAzureStorageAccountsArgs(), options.WithVersion());
    }


    public sealed class ListWebAppAzureStorageAccountsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public ListWebAppAzureStorageAccountsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListWebAppAzureStorageAccountsResult
    {
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Azure storage accounts.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.AzureStorageInfoValueResponseResult> Properties;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListWebAppAzureStorageAccountsResult(
            string id,

            string? kind,

            string name,

            ImmutableDictionary<string, Outputs.AzureStorageInfoValueResponseResult> properties,

            Outputs.SystemDataResponse systemData,

            string type)
        {
            Id = id;
            Kind = kind;
            Name = name;
            Properties = properties;
            SystemData = systemData;
            Type = type;
        }
    }
}
