// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Solutions.V20190701.Inputs
{

    /// <summary>
    /// Managed application Jit access policy.
    /// </summary>
    public sealed class ApplicationJitAccessPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether the JIT access is enabled.
        /// </summary>
        [Input("jitAccessEnabled", required: true)]
        public Input<bool> JitAccessEnabled { get; set; } = null!;

        /// <summary>
        /// JIT approval mode.
        /// </summary>
        [Input("jitApprovalMode")]
        public InputUnion<string, Pulumi.AzureNextGen.Solutions.V20190701.JitApprovalMode>? JitApprovalMode { get; set; }

        [Input("jitApprovers")]
        private InputList<Inputs.JitApproverDefinitionArgs>? _jitApprovers;

        /// <summary>
        /// The JIT approvers
        /// </summary>
        public InputList<Inputs.JitApproverDefinitionArgs> JitApprovers
        {
            get => _jitApprovers ?? (_jitApprovers = new InputList<Inputs.JitApproverDefinitionArgs>());
            set => _jitApprovers = value;
        }

        /// <summary>
        /// The maximum duration JIT access is granted. This is an ISO8601 time period value.
        /// </summary>
        [Input("maximumJitAccessDuration")]
        public Input<string>? MaximumJitAccessDuration { get; set; }

        public ApplicationJitAccessPolicyArgs()
        {
        }
    }
}
