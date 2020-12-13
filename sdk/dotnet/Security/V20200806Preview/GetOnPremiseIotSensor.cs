// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200806Preview
{
    public static class GetOnPremiseIotSensor
    {
        public static Task<GetOnPremiseIotSensorResult> InvokeAsync(GetOnPremiseIotSensorArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetOnPremiseIotSensorResult>("azure-nextgen:security/v20200806preview:getOnPremiseIotSensor", args ?? new GetOnPremiseIotSensorArgs(), options.WithVersion());
    }


    public sealed class GetOnPremiseIotSensorArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the on-premise IoT sensor
        /// </summary>
        [Input("onPremiseIotSensorName", required: true)]
        public string OnPremiseIotSensorName { get; set; } = null!;

        public GetOnPremiseIotSensorArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetOnPremiseIotSensorResult
    {
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetOnPremiseIotSensorResult(
            string id,

            string name,

            string type)
        {
            Id = id;
            Name = name;
            Type = type;
        }
    }
}
