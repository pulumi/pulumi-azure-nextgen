// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    public static class ListStaticSiteBuildFunctionAppSettings
    {
        public static Task<ListStaticSiteBuildFunctionAppSettingsResult> InvokeAsync(ListStaticSiteBuildFunctionAppSettingsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListStaticSiteBuildFunctionAppSettingsResult>("azure-nextgen:web/v20200901:listStaticSiteBuildFunctionAppSettings", args ?? new ListStaticSiteBuildFunctionAppSettingsArgs(), options.WithVersion());
    }


    public sealed class ListStaticSiteBuildFunctionAppSettingsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the static site.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The stage site identifier.
        /// </summary>
        [Input("prId", required: true)]
        public string PrId { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public ListStaticSiteBuildFunctionAppSettingsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListStaticSiteBuildFunctionAppSettingsResult
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
        /// Settings.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Properties;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListStaticSiteBuildFunctionAppSettingsResult(
            string id,

            string? kind,

            string name,

            ImmutableDictionary<string, string> properties,

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