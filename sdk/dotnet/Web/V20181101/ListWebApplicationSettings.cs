// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101
{
    public static class ListWebApplicationSettings
    {
        public static Task<ListWebApplicationSettingsResult> InvokeAsync(ListWebApplicationSettingsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListWebApplicationSettingsResult>("azure-nextgen:web/v20181101:listWebApplicationSettings", args ?? new ListWebApplicationSettingsArgs(), options.WithVersion());
    }


    public sealed class ListWebApplicationSettingsArgs : Pulumi.InvokeArgs
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

        public ListWebApplicationSettingsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListWebApplicationSettingsResult
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
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListWebApplicationSettingsResult(
            string id,

            string? kind,

            string name,

            ImmutableDictionary<string, string> properties,

            string type)
        {
            Id = id;
            Kind = kind;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
