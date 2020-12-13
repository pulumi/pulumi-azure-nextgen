// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.VirtualMachineImages.V20190501Preview
{
    public static class GetVirtualMachineImageTemplate
    {
        public static Task<GetVirtualMachineImageTemplateResult> InvokeAsync(GetVirtualMachineImageTemplateArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualMachineImageTemplateResult>("azure-nextgen:virtualmachineimages/v20190501preview:getVirtualMachineImageTemplate", args ?? new GetVirtualMachineImageTemplateArgs(), options.WithVersion());
    }


    public sealed class GetVirtualMachineImageTemplateArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the image Template
        /// </summary>
        [Input("imageTemplateName", required: true)]
        public string ImageTemplateName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetVirtualMachineImageTemplateArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualMachineImageTemplateResult
    {
        /// <summary>
        /// Maximum duration to wait while building the image template. Omit or specify 0 to use the default (4 hours).
        /// </summary>
        public readonly int? BuildTimeoutInMinutes;
        /// <summary>
        /// Specifies the properties used to describe the customization steps of the image, like Image source etc
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.ImageTemplateFileCustomizerResponse, Union<Outputs.ImageTemplatePowerShellCustomizerResponse, Union<Outputs.ImageTemplateRestartCustomizerResponse, Outputs.ImageTemplateShellCustomizerResponse>>>> Customize;
        /// <summary>
        /// The distribution targets where the image output needs to go to.
        /// </summary>
        public readonly ImmutableArray<Union<Outputs.ImageTemplateManagedImageDistributorResponse, Union<Outputs.ImageTemplateSharedImageDistributorResponse, Outputs.ImageTemplateVhdDistributorResponse>>> Distribute;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of the image template, if configured.
        /// </summary>
        public readonly Outputs.ImageTemplateIdentityResponse? Identity;
        /// <summary>
        /// State of 'run' that is currently executing or was last executed.
        /// </summary>
        public readonly Outputs.ImageTemplateLastRunStatusResponse LastRunStatus;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning error, if any
        /// </summary>
        public readonly Outputs.ProvisioningErrorResponse ProvisioningError;
        /// <summary>
        /// Provisioning state of the resource
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Specifies the properties used to describe the source image.
        /// </summary>
        public readonly Union<Outputs.ImageTemplateIsoSourceResponse, Union<Outputs.ImageTemplateManagedImageSourceResponse, Union<Outputs.ImageTemplatePlatformImageSourceResponse, Outputs.ImageTemplateSharedImageVersionSourceResponse>>> Source;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Describes how virtual machine is set up to build images
        /// </summary>
        public readonly Outputs.ImageTemplateVmProfileResponse? VmProfile;

        [OutputConstructor]
        private GetVirtualMachineImageTemplateResult(
            int? buildTimeoutInMinutes,

            ImmutableArray<Union<Outputs.ImageTemplateFileCustomizerResponse, Union<Outputs.ImageTemplatePowerShellCustomizerResponse, Union<Outputs.ImageTemplateRestartCustomizerResponse, Outputs.ImageTemplateShellCustomizerResponse>>>> customize,

            ImmutableArray<Union<Outputs.ImageTemplateManagedImageDistributorResponse, Union<Outputs.ImageTemplateSharedImageDistributorResponse, Outputs.ImageTemplateVhdDistributorResponse>>> distribute,

            string id,

            Outputs.ImageTemplateIdentityResponse? identity,

            Outputs.ImageTemplateLastRunStatusResponse lastRunStatus,

            string location,

            string name,

            Outputs.ProvisioningErrorResponse provisioningError,

            string provisioningState,

            Union<Outputs.ImageTemplateIsoSourceResponse, Union<Outputs.ImageTemplateManagedImageSourceResponse, Union<Outputs.ImageTemplatePlatformImageSourceResponse, Outputs.ImageTemplateSharedImageVersionSourceResponse>>> source,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.ImageTemplateVmProfileResponse? vmProfile)
        {
            BuildTimeoutInMinutes = buildTimeoutInMinutes;
            Customize = customize;
            Distribute = distribute;
            Id = id;
            Identity = identity;
            LastRunStatus = lastRunStatus;
            Location = location;
            Name = name;
            ProvisioningError = provisioningError;
            ProvisioningState = provisioningState;
            Source = source;
            Tags = tags;
            Type = type;
            VmProfile = vmProfile;
        }
    }
}
