// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200601
{
    public static class GetWebAppDomainOwnershipIdentifier
    {
        public static Task<GetWebAppDomainOwnershipIdentifierResult> InvokeAsync(GetWebAppDomainOwnershipIdentifierArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppDomainOwnershipIdentifierResult>("azure-nextgen:web/v20200601:getWebAppDomainOwnershipIdentifier", args ?? new GetWebAppDomainOwnershipIdentifierArgs(), options.WithVersion());
    }


    public sealed class GetWebAppDomainOwnershipIdentifierArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of domain ownership identifier.
        /// </summary>
        [Input("domainOwnershipIdentifierName", required: true)]
        public string DomainOwnershipIdentifierName { get; set; } = null!;

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

        public GetWebAppDomainOwnershipIdentifierArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppDomainOwnershipIdentifierResult
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
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// String representation of the identity.
        /// </summary>
        public readonly string? Value;

        [OutputConstructor]
        private GetWebAppDomainOwnershipIdentifierResult(
            string id,

            string? kind,

            string name,

            string type,

            string? value)
        {
            Id = id;
            Kind = kind;
            Name = name;
            Type = type;
            Value = value;
        }
    }
}
