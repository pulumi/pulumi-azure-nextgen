// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Logic.V20160601
{
    public static class GetSchema
    {
        public static Task<GetSchemaResult> InvokeAsync(GetSchemaArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSchemaResult>("azure-nextgen:logic/v20160601:getSchema", args ?? new GetSchemaArgs(), options.WithVersion());
    }


    public sealed class GetSchemaArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The integration account name.
        /// </summary>
        [Input("integrationAccountName", required: true)]
        public string IntegrationAccountName { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The integration account schema name.
        /// </summary>
        [Input("schemaName", required: true)]
        public string SchemaName { get; set; } = null!;

        public GetSchemaArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSchemaResult
    {
        /// <summary>
        /// The changed time.
        /// </summary>
        public readonly string ChangedTime;
        /// <summary>
        /// The content.
        /// </summary>
        public readonly string? Content;
        /// <summary>
        /// The content link.
        /// </summary>
        public readonly Outputs.ContentLinkResponse ContentLink;
        /// <summary>
        /// The content type.
        /// </summary>
        public readonly string? ContentType;
        /// <summary>
        /// The created time.
        /// </summary>
        public readonly string CreatedTime;
        /// <summary>
        /// The document name.
        /// </summary>
        public readonly string? DocumentName;
        /// <summary>
        /// The file name.
        /// </summary>
        public readonly string? FileName;
        /// <summary>
        /// The resource id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The metadata.
        /// </summary>
        public readonly object? Metadata;
        /// <summary>
        /// Gets the resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The schema type.
        /// </summary>
        public readonly string SchemaType;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The target namespace of the schema.
        /// </summary>
        public readonly string? TargetNamespace;
        /// <summary>
        /// Gets the resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetSchemaResult(
            string changedTime,

            string? content,

            Outputs.ContentLinkResponse contentLink,

            string? contentType,

            string createdTime,

            string? documentName,

            string? fileName,

            string id,

            string? location,

            object? metadata,

            string name,

            string schemaType,

            ImmutableDictionary<string, string>? tags,

            string? targetNamespace,

            string type)
        {
            ChangedTime = changedTime;
            Content = content;
            ContentLink = contentLink;
            ContentType = contentType;
            CreatedTime = createdTime;
            DocumentName = documentName;
            FileName = fileName;
            Id = id;
            Location = location;
            Metadata = metadata;
            Name = name;
            SchemaType = schemaType;
            Tags = tags;
            TargetNamespace = targetNamespace;
            Type = type;
        }
    }
}
