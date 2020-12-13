// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.Latest
{
    public static class GetChapSetting
    {
        public static Task<GetChapSettingResult> InvokeAsync(GetChapSettingArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetChapSettingResult>("azure-nextgen:storsimple/latest:getChapSetting", args ?? new GetChapSettingArgs(), options.WithVersion());
    }


    public sealed class GetChapSettingArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The user name of chap to be fetched.
        /// </summary>
        [Input("chapUserName", required: true)]
        public string ChapUserName { get; set; } = null!;

        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public string DeviceName { get; set; } = null!;

        /// <summary>
        /// The manager name
        /// </summary>
        [Input("managerName", required: true)]
        public string ManagerName { get; set; } = null!;

        /// <summary>
        /// The resource group name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetChapSettingArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetChapSettingResult
    {
        /// <summary>
        /// The identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The chap password.
        /// </summary>
        public readonly Outputs.AsymmetricEncryptedSecretResponse Password;
        /// <summary>
        /// The type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetChapSettingResult(
            string id,

            string name,

            Outputs.AsymmetricEncryptedSecretResponse password,

            string type)
        {
            Id = id;
            Name = name;
            Password = password;
            Type = type;
        }
    }
}
