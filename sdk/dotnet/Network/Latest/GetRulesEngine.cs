// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetRulesEngine
    {
        public static Task<GetRulesEngineResult> InvokeAsync(GetRulesEngineArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRulesEngineResult>("azure-nextgen:network/latest:getRulesEngine", args ?? new GetRulesEngineArgs(), options.WithVersion());
    }


    public sealed class GetRulesEngineArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the Front Door which is globally unique.
        /// </summary>
        [Input("frontDoorName", required: true)]
        public string FrontDoorName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the Rules Engine which is unique within the Front Door.
        /// </summary>
        [Input("rulesEngineName", required: true)]
        public string RulesEngineName { get; set; } = null!;

        public GetRulesEngineArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRulesEngineResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource status.
        /// </summary>
        public readonly string ResourceState;
        /// <summary>
        /// A list of rules that define a particular Rules Engine Configuration.
        /// </summary>
        public readonly ImmutableArray<Outputs.RulesEngineRuleResponse> Rules;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRulesEngineResult(
            string id,

            string name,

            string resourceState,

            ImmutableArray<Outputs.RulesEngineRuleResponse> rules,

            string type)
        {
            Id = id;
            Name = name;
            ResourceState = resourceState;
            Rules = rules;
            Type = type;
        }
    }
}
