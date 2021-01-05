// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.Latest.Inputs
{

    /// <summary>
    /// Rule to place restrictions on portions of the cache namespace being presented to clients.
    /// </summary>
    public sealed class NfsAccessRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Access allowed by this rule.
        /// </summary>
        [Input("access", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.StorageCache.Latest.NfsAccessRuleAccess> Access { get; set; } = null!;

        /// <summary>
        /// GID value that replaces 0 when rootSquash is true.
        /// </summary>
        [Input("anonymousGID")]
        public Input<string>? AnonymousGID { get; set; }

        /// <summary>
        /// UID value that replaces 0 when rootSquash is true.
        /// </summary>
        [Input("anonymousUID")]
        public Input<string>? AnonymousUID { get; set; }

        /// <summary>
        /// Filter applied to the scope for this rule. The filter's format depends on its scope. 'default' scope matches all clients and has no filter value. 'network' scope takes a filter in CIDR format (for example, 10.99.1.0/24). 'host' takes an IP address or fully qualified domain name as filter. If a client does not match any filter rule and there is no default rule, access is denied.
        /// </summary>
        [Input("filter")]
        public Input<string>? Filter { get; set; }

        /// <summary>
        /// Map root accesses to anonymousUID and anonymousGID.
        /// </summary>
        [Input("rootSquash")]
        public Input<bool>? RootSquash { get; set; }

        /// <summary>
        /// Scope for this rule. The scope and filter determine which clients match the rule.
        /// </summary>
        [Input("scope", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.StorageCache.Latest.NfsAccessRuleScope> Scope { get; set; } = null!;

        /// <summary>
        /// For the default policy, allow access to subdirectories under the root export. If this is set to no, clients can only mount the path '/'. If set to yes, clients can mount a deeper path, like '/a/b'.
        /// </summary>
        [Input("submountAccess")]
        public Input<bool>? SubmountAccess { get; set; }

        /// <summary>
        /// Allow SUID semantics.
        /// </summary>
        [Input("suid")]
        public Input<bool>? Suid { get; set; }

        public NfsAccessRuleArgs()
        {
        }
    }
}
