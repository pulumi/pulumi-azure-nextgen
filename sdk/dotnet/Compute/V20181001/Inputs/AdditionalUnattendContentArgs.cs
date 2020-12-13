// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20181001.Inputs
{

    /// <summary>
    /// Specifies additional XML formatted information that can be included in the Unattend.xml file, which is used by Windows Setup. Contents are defined by setting name, component name, and the pass in which the content is applied.
    /// </summary>
    public sealed class AdditionalUnattendContentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
        /// </summary>
        [Input("componentName")]
        public Input<Pulumi.AzureNextGen.Compute.V20181001.ComponentNames>? ComponentName { get; set; }

        /// <summary>
        /// Specifies the XML formatted content that is added to the unattend.xml file for the specified path and component. The XML must be less than 4KB and must include the root element for the setting or feature that is being inserted.
        /// </summary>
        [Input("content")]
        public Input<string>? Content { get; set; }

        /// <summary>
        /// The pass name. Currently, the only allowable value is OobeSystem.
        /// </summary>
        [Input("passName")]
        public Input<Pulumi.AzureNextGen.Compute.V20181001.PassNames>? PassName { get; set; }

        /// <summary>
        /// Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
        /// </summary>
        [Input("settingName")]
        public Input<Pulumi.AzureNextGen.Compute.V20181001.SettingNames>? SettingName { get; set; }

        public AdditionalUnattendContentArgs()
        {
        }
    }
}
