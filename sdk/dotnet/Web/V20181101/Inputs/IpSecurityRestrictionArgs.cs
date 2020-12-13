// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101.Inputs
{

    /// <summary>
    /// IP security restriction on an app.
    /// </summary>
    public sealed class IpSecurityRestrictionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Allow or Deny access for this IP range.
        /// </summary>
        [Input("action")]
        public Input<string>? Action { get; set; }

        /// <summary>
        /// IP restriction rule description.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// IP address the security restriction is valid for.
        /// It can be in form of pure ipv4 address (required SubnetMask property) or
        /// CIDR notation such as ipv4/mask (leading bit match). For CIDR,
        /// SubnetMask property must not be specified.
        /// </summary>
        [Input("ipAddress")]
        public Input<string>? IpAddress { get; set; }

        /// <summary>
        /// IP restriction rule name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Priority of IP restriction rule.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// Subnet mask for the range of IP addresses the restriction is valid for.
        /// </summary>
        [Input("subnetMask")]
        public Input<string>? SubnetMask { get; set; }

        /// <summary>
        /// (internal) Subnet traffic tag
        /// </summary>
        [Input("subnetTrafficTag")]
        public Input<int>? SubnetTrafficTag { get; set; }

        /// <summary>
        /// Defines what this IP filter will be used for. This is to support IP filtering on proxies.
        /// </summary>
        [Input("tag")]
        public Input<Pulumi.AzureNextGen.Web.V20181101.IpFilterTag>? Tag { get; set; }

        /// <summary>
        /// Virtual network resource id
        /// </summary>
        [Input("vnetSubnetResourceId")]
        public Input<string>? VnetSubnetResourceId { get; set; }

        /// <summary>
        /// (internal) Vnet traffic tag
        /// </summary>
        [Input("vnetTrafficTag")]
        public Input<int>? VnetTrafficTag { get; set; }

        public IpSecurityRestrictionArgs()
        {
        }
    }
}
