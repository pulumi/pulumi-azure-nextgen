// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20160801
{
    public static class ListWebAppConnectionStrings
    {
        public static Task<ListWebAppConnectionStringsResult> InvokeAsync(ListWebAppConnectionStringsArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<ListWebAppConnectionStringsResult>("azure-nextgen:web/v20160801:listWebAppConnectionStrings", args ?? new ListWebAppConnectionStringsArgs(), options.WithVersion());
    }


    public sealed class ListWebAppConnectionStringsArgs : Pulumi.InvokeArgs
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

        public ListWebAppConnectionStringsArgs()
        {
        }
    }


    [OutputType]
    public sealed class ListWebAppConnectionStringsResult
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
        /// Connection strings.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ConnStringValueTypePairResponseResult> Properties;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ListWebAppConnectionStringsResult(
            string id,

            string? kind,

            string name,

            ImmutableDictionary<string, Outputs.ConnStringValueTypePairResponseResult> properties,

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
