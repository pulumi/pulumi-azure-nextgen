// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201Preview
{
    public static class GetEmailTemplate
    {
        public static Task<GetEmailTemplateResult> InvokeAsync(GetEmailTemplateArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEmailTemplateResult>("azure-nextgen:apimanagement/v20191201preview:getEmailTemplate", args ?? new GetEmailTemplateArgs(), options.WithVersion());
    }


    public sealed class GetEmailTemplateArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        /// <summary>
        /// Email Template Name Identifier.
        /// </summary>
        [Input("templateName", required: true)]
        public string TemplateName { get; set; } = null!;

        public GetEmailTemplateArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEmailTemplateResult
    {
        /// <summary>
        /// Email Template Body. This should be a valid XDocument
        /// </summary>
        public readonly string Body;
        /// <summary>
        /// Description of the Email Template.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Whether the template is the default template provided by Api Management or has been edited.
        /// </summary>
        public readonly bool IsDefault;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Email Template Parameter values.
        /// </summary>
        public readonly ImmutableArray<Outputs.EmailTemplateParametersContractPropertiesResponse> Parameters;
        /// <summary>
        /// Subject of the Template.
        /// </summary>
        public readonly string Subject;
        /// <summary>
        /// Title of the Template.
        /// </summary>
        public readonly string? Title;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetEmailTemplateResult(
            string body,

            string? description,

            string id,

            bool isDefault,

            string name,

            ImmutableArray<Outputs.EmailTemplateParametersContractPropertiesResponse> parameters,

            string subject,

            string? title,

            string type)
        {
            Body = body;
            Description = description;
            Id = id;
            IsDefault = isDefault;
            Name = name;
            Parameters = parameters;
            Subject = subject;
            Title = title;
            Type = type;
        }
    }
}
